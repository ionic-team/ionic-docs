import sdk from '@stackblitz/sdk';

// The default title to use for Stackblitz examples (when not overwritten)
const DEFAULT_EDITOR_TITLE = 'Ionic Docs Example';
// The default description to use for Stackblitz examples (when not overwritten)
const DEFAULT_EDITOR_DESCRIPTION = '';
// Default package version to use for all @ionic/* packages.
const DEFAULT_IONIC_VERSION = '^6.0.0';


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
  }

  angularModuleOptions?: {
    imports: string[];
    declarations?: string[];
  };
}

const loadSourceFiles = async (files: string[]) => {
  const sourceFiles = await Promise.all(files.map(f => fetch(`/docs/code/stackblitz/${f}`)));
  return (await Promise.all(sourceFiles.map(res => res.text())));
}

const openHtmlEditor = async (code: string, options?: EditorOptions) => {
  const [index_ts, index_html] = await loadSourceFiles([
    'html/index.ts',
    'html/index.html',
  ]);

  sdk.openProject({
    template: 'typescript',
    title: options?.title ?? DEFAULT_EDITOR_TITLE,
    description: options?.description ?? DEFAULT_EDITOR_DESCRIPTION,
    files: {
      // Injects our code sample into the body of the HTML document
      'index.html': index_html.replace(/<body><\/body>/g, `<body>\n` + code + '</body>'),
      'index.ts': index_ts,
      ...options?.files
    },
    dependencies: {
      '@ionic/core': DEFAULT_IONIC_VERSION,
    },
  })
}

const openAngularEditor = async (code: string, options?: EditorOptions) => {
  let [main_ts, app_module_ts, app_component_ts, app_component_css, styles_css, global_css, angular_json, tsconfig_json] = await loadSourceFiles([
    'angular/main.ts',
    'angular/app.module.ts',
    'angular/app.component.ts',
    'angular/app.component.css',
    'angular/styles.css',
    'angular/global.css',
    'angular/angular.json',
    'angular/tsconfig.json'
  ])

  if (options.angularModuleOptions) {
    if (options.angularModuleOptions.imports) {
      app_module_ts = `${options.angularModuleOptions.imports.join('\n')}\n${app_module_ts}`;
    }
    if (options.angularModuleOptions.declarations) {
      app_module_ts = app_module_ts.replace('/* CUSTOM_DECLARATIONS */', options.angularModuleOptions.declarations.map(d => `\n  ${d}`).join(','));
    }
  }

  sdk.openProject({
    template: 'angular-cli',
    title: options?.title ?? DEFAULT_EDITOR_TITLE,
    description: options?.description ?? DEFAULT_EDITOR_DESCRIPTION,
    files: {
      'src/main.ts': main_ts,
      'src/polyfills.ts': `import 'zone.js/dist/zone';`,
      'src/app/app.module.ts': app_module_ts,
      'src/app/app.component.ts': app_component_ts,
      'src/app/app.component.html': code,
      'src/app/app.component.css': app_component_css,
      'src/index.html': '<app-root></app-root>',
      'src/styles.css': styles_css,
      'src/global.css': global_css,
      'angular.json': angular_json,
      'tsconfig.json': tsconfig_json,
      ...options?.files
    },
    dependencies: {
      '@ionic/angular': DEFAULT_IONIC_VERSION,
      /**
       * Stackblitz doesn't install the underlying `@ionic/core` package type declarations.
       * This can lead to issues with extended type declarations, such as our proxies
       * that extend the JSX component type.
       *
       * We manually install this dependency to avoid this issue in Stackblitz.
       */
      '@ionic/core': DEFAULT_IONIC_VERSION,
    },
  });
}

const openReactEditor = async (code: string, options?: EditorOptions) => {
  /**
   * This controls what the component is imported
   * as. Since we use "export default" in the actual
   * component template, this does not need to match
   * up with the actual component name.
   */
  const componentTagName = 'Example';

  const [index_tsx, app_tsx, ts_config_json, package_json, package_lock_json] = await loadSourceFiles([
    'react/index.tsx',
    'react/app.tsx',
    'react/tsconfig.json',
    'react/package.json',
    'react/package-lock.json'
  ]);

  const app_tsx_renamed = app_tsx
    // Inserts the component name from the sample into the <IonApp> tag.
    .replace(/<IonApp><\/IonApp>/g, `<IonApp><${componentTagName} /></IonApp>`)
    // Imports the component from our `main` example file.
    .replace(/setupIonicReact\(\);/g, `import ${componentTagName} from "./main";\n\n` + 'setupIonicReact();');

  sdk.openProject({
    template: 'node',
    title: options?.title ?? DEFAULT_EDITOR_TITLE,
    description: options?.description ?? DEFAULT_EDITOR_DESCRIPTION,
    files: {
      'public/index.html': `<div id="root"></div>`,
      'src/index.tsx': index_tsx,
      'src/App.tsx': app_tsx_renamed,
      'src/main.tsx': code,
      'tsconfig.json': ts_config_json,
      'package.json': package_json,
      'package-lock.json': package_lock_json,
      ...options?.files,
      '.stackblitzrc': `{
        "startCommand": "yarn run start"
      }`
    }
  })
}

const openVueEditor = async (code: string, options?: EditorOptions) => {
  const [package_json, package_lock_json, index_html, vite_config_ts, main_ts, app_vue, tsconfig_json, tsconfig_node_json, env_d_ts] = await loadSourceFiles([
    'vue/package.json',
    'vue/package-lock.json',
    'vue/index.html',
    'vue/vite.config.ts',
    'vue/main.ts',
    'vue/App.vue',
    'vue/tsconfig.json',
    'vue/tsconfig.node.json',
    'vue/env.d.ts'
  ]);
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
    files: {
      'src/App.vue': app_vue,
      'src/components/Example.vue': code,
      'src/main.ts': main_ts,
      'src/env.d.ts': env_d_ts,
      'index.html': index_html,
      'vite.config.ts': vite_config_ts,
      'package.json': package_json,
      'package-lock.json': package_lock_json,
      'tsconfig.json': tsconfig_json,
      'tsconfig.node.json': tsconfig_node_json,
      ...options?.files,
      '.stackblitzrc': `{
        "startCommand": "yarn run dev"
      }`
    }
  });
}

export { openAngularEditor, openHtmlEditor, openReactEditor, openVueEditor };
