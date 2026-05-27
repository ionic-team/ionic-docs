import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('@stackblitz/sdk', () => ({
  default: {
    openProject: vi.fn(),
  },
}));

import sdk from '@stackblitz/sdk';

import {
  extractHtmlIonicConfig,
  getFormattedIonicConfig,
  mergeFormattedIonicConfig,
  openAngularEditor,
  openHtmlEditor,
  openReactEditor,
  openVueEditor,
} from './stackblitz.utils';

const createMockFetch = (files: Record<string, string>, version = 'v9') =>
  vi.fn(async (input: string | URL | Request) => {
    const path = String(input).replace(`/docs/code/stackblitz/${version}/`, '');
    return { text: async () => files[path] ?? '' } as Response;
  }) as typeof fetch;

describe('stackblitz.utils', () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  describe('getFormattedIonicConfig()', () => {
    it('formats mode config with canonical 2-space indentation', () => {
      expect(getFormattedIonicConfig({ mode: 'md' })).toBe('{\n  mode: "md"\n}');
    });

    it('returns "{}" when no mode is provided', () => {
      expect(getFormattedIonicConfig()).toBe('{}');
    });
  });

  describe('mergeFormattedIonicConfig()', () => {
    it('merges existing config and mode into canonical 2-space format', () => {
      const existingConfig = `{
    innerHTMLTemplatesEnabled: true,
  }`;

      const merged = mergeFormattedIonicConfig(existingConfig, getFormattedIonicConfig({ mode: 'md' }));

      expect(merged).toBe(`{
  innerHTMLTemplatesEnabled: true,
  mode: "md"
}`);
    });

    it('returns only the mode config when the existing config is malformed', () => {
      expect(mergeFormattedIonicConfig('not an object', getFormattedIonicConfig({ mode: 'md' }))).toBe(
        '{\n  mode: "md"\n}'
      );
    });

    it('returns only the mode config when the existing config has only whitespace inside braces', () => {
      expect(mergeFormattedIonicConfig('{   }', getFormattedIonicConfig({ mode: 'md' }))).toBe('{\n  mode: "md"\n}');
    });
  });

  describe('extractHtmlIonicConfig()', () => {
    it('extracts inline window.Ionic config and merges it with mode config', () => {
      const source = `<script>
  window.Ionic = {
    config: {
      innerHTMLTemplatesEnabled: true,
    },
  };
</script>`;

      const transformed = extractHtmlIonicConfig(source, getFormattedIonicConfig({ mode: 'md' }));

      expect(transformed.code).toBe('');
      expect(transformed.ionicConfig).toBe(`{
  innerHTMLTemplatesEnabled: true,
  mode: "md"
}`);
    });

    it('keeps passed JavaScript when no window.Ionic config assignment exists', () => {
      const source = `<script>
  console.log('hello');
</script>`;

      const transformed = extractHtmlIonicConfig(source, getFormattedIonicConfig({ mode: 'md' }));

      expect(transformed.code).toBe(source);
      expect(transformed.ionicConfig).toBe('{\n  mode: "md"\n}');
    });

    it('does not combine an unrelated script block', () => {
      const source = `<script>
  const randomConfig = {
    mode: 'ios',
    innerHTMLTemplatesEnabled: true,
  };
  window.RandomIonic = randomConfig;
</script>`;

      const transformed = extractHtmlIonicConfig(source, getFormattedIonicConfig({ mode: 'md' }));

      expect(transformed.code).toBe(source);
      expect(transformed.ionicConfig).toBe('{\n  mode: "md"\n}');
    });

    it('keeps unrelated scripts when extracting window.Ionic config script', () => {
      const source = `<script>
  console.log('keep me');
</script>
<script>
  window.Ionic = {
    config: {
      innerHTMLTemplatesEnabled: true,
    },
  };
</script>`;

      const transformed = extractHtmlIonicConfig(source, getFormattedIonicConfig({ mode: 'md' }));

      expect(transformed.code).toContain(`console.log('keep me');`);
      expect(transformed.code).not.toContain('window.Ionic = {');
      expect(transformed.ionicConfig).toBe(`{
  innerHTMLTemplatesEnabled: true,
  mode: "md"
}`);
    });

    it('captures a block-comment block attached to the window.Ionic assignment', () => {
      const source = `<script>
  console.log('keep me');
  /**
   * \`innerHTMLTemplatesEnabled\` must be enabled for rich-content
   * select options to render correctly.
   */
  window.Ionic = {
    config: {
      innerHTMLTemplatesEnabled: true,
    },
  };
</script>`;

      const transformed = extractHtmlIonicConfig(source, getFormattedIonicConfig({ mode: 'md' }));

      expect(transformed.code).toContain(`console.log('keep me');`);
      expect(transformed.code).not.toContain('window.Ionic = {');
      expect(transformed.code).not.toContain('innerHTMLTemplatesEnabled');
      expect(transformed.code).not.toContain('must be enabled for rich-content');
      expect(transformed.leadingComment).toContain('must be enabled for rich-content');
      expect(transformed.ionicConfig).toBe(`{
  innerHTMLTemplatesEnabled: true,
  mode: "md"
}`);
    });

    it('captures leading // comments attached to the window.Ionic assignment', () => {
      const source = `<script>
  console.log('keep me');
  // \`innerHTMLTemplatesEnabled\` must be enabled for rich-content
  // select options to render correctly.
  window.Ionic = {
    config: {
      innerHTMLTemplatesEnabled: true,
    },
  };
</script>`;

      const transformed = extractHtmlIonicConfig(source, getFormattedIonicConfig({ mode: 'md' }));

      expect(transformed.code).toContain(`console.log('keep me');`);
      expect(transformed.code).not.toContain('window.Ionic = {');
      expect(transformed.code).not.toContain('innerHTMLTemplatesEnabled');
      expect(transformed.code).not.toContain('must be enabled for rich-content');
      expect(transformed.leadingComment).toContain('must be enabled for rich-content');
      expect(transformed.ionicConfig).toBe(`{
  innerHTMLTemplatesEnabled: true,
  mode: "md"
}`);
    });

    it('does not leave blank lines before remaining script content', () => {
      const source = `<script>
  // remove this config
  window.Ionic = {
    config: {
      innerHTMLTemplatesEnabled: true,
    },
  };

  console.log('something');
</script>`;

      const transformed = extractHtmlIonicConfig(source, getFormattedIonicConfig({ mode: 'md' }));

      expect(transformed.code).toContain(`<script>\n  console.log('something');`);
      expect(transformed.code).not.toContain(`<script>\n  \n  console.log('something');`);
      expect(transformed.code).not.toContain(`<script>\n\n  console.log('something');`);
    });

    it('does not extract from window.Ionic inside an HTML comment', () => {
      const source = `<!-- <script>
  window.Ionic = {
    config: {
      innerHTMLTemplatesEnabled: true,
    },
  };
</script> -->
<script>
  console.log('keep me');
  window.Ionic = {
    config: {
      innerHTMLTemplatesEnabled: true,
    },
  };
</script>`;

      const transformed = extractHtmlIonicConfig(source, getFormattedIonicConfig({ mode: 'md' }));

      expect(transformed.code).toContain(`<!-- <script>`);
      expect(transformed.code).toContain(`window.Ionic = {`);
      expect(transformed.code).toContain(`console.log('keep me');`);
      expect(transformed.ionicConfig).toBe(`{
  innerHTMLTemplatesEnabled: true,
  mode: "md"
}`);
    });
  });

  describe('openHtmlEditor()', () => {
    it('keeps unrelated script content in generated index.html', async () => {
      global.fetch = createMockFetch({
        'html/package.json': JSON.stringify({ dependencies: {} }),
        'html/package-lock.json': '{}',
        'html/tsconfig.json': '{}',
        'html/index.withContent.html': `<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
  <ion-app>
    <ion-content class="ion-padding">
      {{ TEMPLATE }}
    </ion-content>
  </ion-app>
</body>
</html>`,
      });

      await openHtmlEditor(
        `<script>
  console.log('keep me');
  /**
   * \`innerHTMLTemplatesEnabled\` must be enabled for rich-content
   * select options to render correctly.
   */
  window.Ionic = {
    config: {
      innerHTMLTemplatesEnabled: true,
    },
  };
</script>`,
        { includeIonContent: true, version: '9', mode: 'md' }
      );

      const openProjectMock = (sdk as any).openProject as ReturnType<typeof vi.fn>;
      expect(openProjectMock).toHaveBeenCalledTimes(1);

      const indexHtml = openProjectMock.mock.calls[0][0].files['index.html'] as string;
      expect(indexHtml).toContain(`console.log('keep me');`);
      expect(indexHtml).toContain('* `innerHTMLTemplatesEnabled` must be enabled for rich-content');

      const ionicAssignments = indexHtml.match(/window\.Ionic\s*=/g) ?? [];
      expect(ionicAssignments).toHaveLength(1);
    });

    it('injects mode-only config into the head when the user code has no window.Ionic', async () => {
      global.fetch = createMockFetch({
        'html/package.json': '{}',
        'html/index.html': `<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>{{ TEMPLATE }}</body>
</html>`,
      });

      await openHtmlEditor('<p>Hello</p>', { version: '9', mode: 'md' });

      const openProjectMock = (sdk as any).openProject as ReturnType<typeof vi.fn>;
      const indexHtml = openProjectMock.mock.calls[0][0].files['index.html'] as string;
      expect(indexHtml).toContain('<p>Hello</p>');
      expect(indexHtml).toContain(`window.Ionic = {
      config: {
        mode: "md"
      }
    };`);
    });
  });

  describe('openAngularEditor()', () => {
    it('merges mode into provideIonicAngular while preserving the source comment and alignment', async () => {
      global.fetch = createMockFetch({
        'angular/package.json': '{}',
        'angular/main.ts': `import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    /**
     * \`innerHTMLTemplatesEnabled\` must be enabled for rich-content
     * select options to render correctly.
     */
    provideIonicAngular({
      innerHTMLTemplatesEnabled: true,
    }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});`,
      });

      await openAngularEditor('<p>hi</p>', { version: '9', mode: 'md' });

      const openProjectMock = (sdk as any).openProject as ReturnType<typeof vi.fn>;
      expect(openProjectMock).toHaveBeenCalledTimes(1);

      const mainTs = openProjectMock.mock.calls[0][0].files['src/main.ts'] as string;
      expect(mainTs).toContain('* `innerHTMLTemplatesEnabled` must be enabled for rich-content');
      expect(mainTs).toContain(`    provideIonicAngular({
      innerHTMLTemplatesEnabled: true,
      mode: "md"
    }),`);
    });

    it('injects mode into the bare provideIonicAngular() in the default template', async () => {
      global.fetch = createMockFetch({
        'angular/package.json': '{}',
        'angular/main.ts': `import { bootstrapApplication } from '@angular/platform-browser';
import { provideIonicAngular } from '@ionic/angular/standalone';

bootstrapApplication(AppComponent, {
  providers: [
    provideIonicAngular(),
  ],
});`,
      });

      await openAngularEditor('<p>hi</p>', { version: '9', mode: 'md' });

      const openProjectMock = (sdk as any).openProject as ReturnType<typeof vi.fn>;
      const mainTs = openProjectMock.mock.calls[0][0].files['src/main.ts'] as string;
      expect(mainTs).toContain(`    provideIonicAngular({
      mode: "md"
    }),`);
    });

    it('injects mode into IonicModule.forRoot for Angular v6 projects', async () => {
      global.fetch = createMockFetch(
        {
          'angular/package.json': '{}',
          'angular/main.ts': `import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { IonicModule } from '@ionic/angular';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(IonicModule.forRoot({ })),
  ],
});`,
        },
        'v6'
      );

      await openAngularEditor('<p>hi</p>', { version: '6', mode: 'md' });

      const openProjectMock = (sdk as any).openProject as ReturnType<typeof vi.fn>;
      const mainTs = openProjectMock.mock.calls[0][0].files['src/main.ts'] as string;
      expect(mainTs).toContain(`    importProvidersFrom(IonicModule.forRoot({
      mode: "md"
    })),`);
    });
  });

  describe('openReactEditor()', () => {
    it('merges mode into setupIonicReact while preserving the source comment', async () => {
      global.fetch = createMockFetch({
        'react/package.json': '{}',
        'react/app.tsx': `import { setupIonicReact, IonApp } from '@ionic/react';

/**
 * \`innerHTMLTemplatesEnabled\` must be enabled for rich-content
 * select options to render correctly.
 */
setupIonicReact({
  innerHTMLTemplatesEnabled: true,
});

export default function App() {
  return <IonApp />;
}`,
      });

      await openReactEditor('export default function Main() { return null; }', { version: '9', mode: 'md' });

      const openProjectMock = (sdk as any).openProject as ReturnType<typeof vi.fn>;
      expect(openProjectMock).toHaveBeenCalledTimes(1);

      const appTsx = openProjectMock.mock.calls[0][0].files['src/App.tsx'] as string;
      expect(appTsx).toContain('* `innerHTMLTemplatesEnabled` must be enabled for rich-content');
      expect(appTsx).toContain(`setupIonicReact({
  innerHTMLTemplatesEnabled: true,
  mode: "md"
});`);
    });

    it('injects mode into the bare setupIonicReact() in the default template', async () => {
      global.fetch = createMockFetch({
        'react/package.json': '{}',
        'react/app.tsx': `import { setupIonicReact, IonApp } from '@ionic/react';

setupIonicReact();

export default function App() {
  return <IonApp />;
}`,
      });

      await openReactEditor('export default function Main() { return null; }', { version: '9', mode: 'md' });

      const openProjectMock = (sdk as any).openProject as ReturnType<typeof vi.fn>;
      const appTsx = openProjectMock.mock.calls[0][0].files['src/App.tsx'] as string;
      expect(appTsx).toContain(`setupIonicReact({
  mode: "md"
});`);
    });

    it('does not modify an existing setupIonicReact config when no mode is provided', async () => {
      global.fetch = createMockFetch({
        'react/package.json': '{}',
        'react/app.tsx': `setupIonicReact({
  innerHTMLTemplatesEnabled: true,
});`,
      });

      await openReactEditor('export default function Main() { return null; }', { version: '9' });

      const openProjectMock = (sdk as any).openProject as ReturnType<typeof vi.fn>;
      const appTsx = openProjectMock.mock.calls[0][0].files['src/App.tsx'] as string;
      expect(appTsx).toContain(`setupIonicReact({
  innerHTMLTemplatesEnabled: true,
});`);
      expect(appTsx).not.toContain('mode:');
    });

    it('merges options.dependencies into the generated package.json', async () => {
      global.fetch = createMockFetch({
        'react/package.json': JSON.stringify({ dependencies: { react: '18.0.0' } }),
        'react/app.tsx': 'setupIonicReact();',
      });

      await openReactEditor('', {
        version: '9',
        mode: 'md',
        dependencies: { 'date-fns': '3.0.0' },
      });

      const openProjectMock = (sdk as any).openProject as ReturnType<typeof vi.fn>;
      const packageJson = JSON.parse(openProjectMock.mock.calls[0][0].files['package.json'] as string);
      expect(packageJson.dependencies).toEqual({
        react: '18.0.0',
        'date-fns': '3.0.0',
      });
    });

    it('applies options.files entries to the generated project', async () => {
      global.fetch = createMockFetch({
        'react/package.json': '{}',
        'react/app.tsx': 'setupIonicReact();',
      });

      await openReactEditor('original main', {
        version: '9',
        mode: 'md',
        files: { 'src/extra.ts': 'export const foo = 1;' },
      });

      const openProjectMock = (sdk as any).openProject as ReturnType<typeof vi.fn>;
      const files = openProjectMock.mock.calls[0][0].files as Record<string, string>;
      expect(files['src/extra.ts']).toBe('export const foo = 1;');
    });
  });

  describe('openVueEditor()', () => {
    it('merges mode into the IonicVue plugin while preserving the source comment and alignment', async () => {
      global.fetch = createMockFetch({
        'vue/package.json': '{}',
        'vue/main.ts': `import { createApp } from 'vue';
import { IonicVue } from '@ionic/vue';

import App from './App.vue';

/**
 * \`innerHTMLTemplatesEnabled\` must be enabled for rich-content
 * select options to render correctly.
 */
createApp(App)
  .use(IonicVue, {
    innerHTMLTemplatesEnabled: true,
  })
  .mount('#app');`,
      });

      await openVueEditor('<template><p>hi</p></template>', { version: '9', mode: 'md' });

      const openProjectMock = (sdk as any).openProject as ReturnType<typeof vi.fn>;
      expect(openProjectMock).toHaveBeenCalledTimes(1);

      const mainTs = openProjectMock.mock.calls[0][0].files['src/main.ts'] as string;
      expect(mainTs).toContain('* `innerHTMLTemplatesEnabled` must be enabled for rich-content');
      expect(mainTs).toContain(`  .use(IonicVue, {
    innerHTMLTemplatesEnabled: true,
    mode: "md"
  })`);
    });

    it('injects mode into the bare .use(IonicVue) in the default template', async () => {
      global.fetch = createMockFetch({
        'vue/package.json': '{}',
        'vue/main.ts': `import { createApp } from 'vue';
import { IonicVue } from '@ionic/vue';
import App from './App.vue';

createApp(App).use(IonicVue).mount('#app');`,
      });

      await openVueEditor('<template><p>hi</p></template>', { version: '9', mode: 'md' });

      const openProjectMock = (sdk as any).openProject as ReturnType<typeof vi.fn>;
      const mainTs = openProjectMock.mock.calls[0][0].files['src/main.ts'] as string;
      expect(mainTs).toContain(`createApp(App).use(IonicVue, {
  mode: "md"
}).mount('#app');`);
    });
  });
});
