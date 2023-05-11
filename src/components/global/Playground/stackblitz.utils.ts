import sdk from '@stackblitz/sdk';

// The default title to use for Stackblitz examples (when not overwritten)
const DEFAULT_EDITOR_TITLE = 'Ionic Docs Example';
// The default description to use for Stackblitz examples (when not overwritten)
const DEFAULT_EDITOR_DESCRIPTION = '';

export interface EditorOptions {
  /**
   * The title of the Stackblitz example.
   */
  title?: string;
  /**
   * The description of the Stackblitz example.
   */
  description?: string;

  files?: {
    [key: string]: string;
  };

  /**
   * `true` if `ion-app` and `ion-content` should automatically be injected into the
   * Stackblitz example.
   */
  includeIonContent: boolean;

  /**
   * The mode of the Stackblitz example.
   */
  mode?: string;

  version?: number;
}

const loadSourceFiles = async (files: string[], version: number) => {
  const versionDir = `v${version}`;
  const sourceFiles = await Promise.all(files.map((f) => fetch(`/docs/code/stackblitz/${versionDir}/${f}`)));
  return await Promise.all(sourceFiles.map((res) => res.text()));
};

const openHtmlEditor = async (code: string, options?: EditorOptions) => {
  const defaultFiles = await loadSourceFiles(
    [
      'html/index.ts',
      options?.includeIonContent ? 'html/index.withContent.html' : 'html/index.html',
      'html/variables.css',
      'html/package.json',
    ],
    options.version
  );

  const indexHtml = 'index.html';
  const files = {
    'index.ts': defaultFiles[0],
    [indexHtml]: defaultFiles[1],
    'theme/variables.css': defaultFiles[2],
    ...options?.files,
  };

  const package_json = defaultFiles[3];

  files[indexHtml] = files[indexHtml].replace(/{{ TEMPLATE }}/g, code).replace(
    '</head>',
    `
  <script>
    window.Ionic = {
      config: {
        mode: '${options?.mode}'
      }
    }
  </script>
</head>
`
  );

  let dependencies = {};
  try {
    dependencies = {
      ...dependencies,
      ...JSON.parse(package_json).dependencies,
    };
  } catch (e) {
    console.error('Failed to parse package.json contents', e);
  }

  sdk.openProject({
    template: 'typescript',
    title: options?.title ?? DEFAULT_EDITOR_TITLE,
    description: options?.description ?? DEFAULT_EDITOR_DESCRIPTION,
    files,
    dependencies,
  });
};

const openAngularEditor = async (code: string, options?: EditorOptions) => {
  const defaultFiles = await loadSourceFiles(
    [
      'angular/main.ts',
      'angular/app.module.ts',
      'angular/app.component.ts',
      'angular/app.component.css',
      options?.includeIonContent ? 'angular/app.component.withContent.html' : 'angular/app.component.html',
      'angular/example.component.ts',
      'angular/styles.css',
      'angular/global.css',
      'angular/variables.css',
      'angular/angular.json',
      'angular/tsconfig.json',
      'angular/package.json',
    ],
    options.version
  );

  const appModule = 'src/app/app.module.ts';
  const files = {
    'src/main.ts': defaultFiles[0],
    'src/polyfills.ts': `import 'zone.js/dist/zone';`,
    [appModule]: defaultFiles[1],
    'src/app/app.component.ts': defaultFiles[2],
    'src/app/app.component.css': defaultFiles[3],
    'src/app/app.component.html': defaultFiles[4],
    'src/app/example.component.ts': defaultFiles[5],
    'src/app/example.component.html': code,
    'src/app/example.component.css': '',
    'src/index.html': '<app-root></app-root>',
    'src/styles.css': defaultFiles[6],
    'src/global.css': defaultFiles[7],
    'src/theme/variables.css': defaultFiles[8],
    'angular.json': defaultFiles[9],
    'tsconfig.json': defaultFiles[10],
    ...options?.files,
  };

  const package_json = defaultFiles[11];

  files[appModule] = files[appModule].replace(
    'IonicModule.forRoot({})',
    `IonicModule.forRoot({ mode: '${options?.mode}' })`
  );

  let dependencies = {};
  try {
    dependencies = {
      ...dependencies,
      ...JSON.parse(package_json).dependencies,
    };
  } catch (e) {
    console.error('Failed to parse package.json contents', e);
  }

  sdk.openProject({
    template: 'angular-cli',
    title: options?.title ?? DEFAULT_EDITOR_TITLE,
    description: options?.description ?? DEFAULT_EDITOR_DESCRIPTION,
    files,
    dependencies,
  });
};

const openReactEditor = async (code: string, options?: EditorOptions) => {
  const defaultFiles = await loadSourceFiles(
    [
      'react/index.tsx',
      options?.includeIonContent ? 'react/app.withContent.tsx' : 'react/app.tsx',
      'react/variables.css',
      'react/tsconfig.json',
      'react/package.json',
      'react/package-lock.json',
      'react/index.html',
    ],
    options.version
  );

  const appTsx = 'src/App.tsx';
  const files = {
    'public/index.html': defaultFiles[6],
    'src/index.tsx': defaultFiles[0],
    [appTsx]: defaultFiles[1],
    'src/main.tsx': code,
    'src/theme/variables.css': defaultFiles[2],
    'tsconfig.json': defaultFiles[3],
    'package.json': defaultFiles[4],
    'package-lock.json': defaultFiles[5],
    ...options?.files,
    '.stackblitzrc': `{
  "startCommand": "yarn run start"
}`,
  };

  files[appTsx] = files[appTsx].replace('setupIonicReact()', `setupIonicReact({ mode: '${options?.mode}' })`);

  sdk.openProject({
    template: 'node',
    title: options?.title ?? DEFAULT_EDITOR_TITLE,
    description: options?.description ?? DEFAULT_EDITOR_DESCRIPTION,
    files,
  });
};

const openVueEditor = async (code: string, options?: EditorOptions) => {
  const defaultFiles = await loadSourceFiles(
    [
      'vue/package.json',
      'vue/package-lock.json',
      'vue/index.html',
      'vue/variables.css',
      'vue/vite.config.ts',
      'vue/main.ts',
      options?.includeIonContent ? 'vue/App.withContent.vue' : 'vue/App.vue',
      'vue/tsconfig.json',
      'vue/tsconfig.node.json',
      'vue/env.d.ts',
    ],
    options.version
  );

  const mainTs = 'src/main.ts';
  const files = {
    'src/App.vue': defaultFiles[6],
    'src/components/Example.vue': code,
    [mainTs]: defaultFiles[5],
    'src/env.d.ts': defaultFiles[9],
    'src/theme/variables.css': defaultFiles[3],
    'index.html': defaultFiles[2],
    'vite.config.ts': defaultFiles[4],
    'package.json': defaultFiles[0],
    'package-lock.json': defaultFiles[1],
    'tsconfig.json': defaultFiles[7],
    'tsconfig.node.json': defaultFiles[8],
    ...options?.files,
    '.stackblitzrc': `{
  "startCommand": "yarn run dev"
}`,
  };

  files[mainTs] = files[mainTs].replace(
    '.use(IonicVue)',
    `.use(IonicVue, {
  mode: '${options?.mode}'
})`
  );

  /**
   * We have to use Stackblitz web containers here (node template), due
   * to multiple issues with Vite, Vue/Vue Router and Vue 3's script setup.
   *
   * https://github.com/stackblitz/core/issues/1308
   */
  sdk.openProject({
    template: 'node',
    title: options?.title ?? DEFAULT_EDITOR_TITLE,
    description: options?.description ?? DEFAULT_EDITOR_DESCRIPTION,
    files,
  });
};

export { openAngularEditor, openHtmlEditor, openReactEditor, openVueEditor };
