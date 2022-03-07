import sdk from '@stackblitz/sdk';

// The default title to use for Stackblitz examples (when not overwritten)
const DEFAULT_EDITOR_TITLE = 'Ionic Docs Example';
// The default description to use for Stackblitz examples (when not overwritten)
const DEFAULT_EDITOR_DESCRIPTION = '';
// Default package version to use for all @ionic/* packages.
const DEFAULT_IONIC_VERSION = '^6.0.0';

interface EditorOptions {
  /**
   * The title of the Stackblitz example.
   */
  title?: string;
  /**
   * The description of the Stackblitz example.
   */
  description?: string;
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
    },
    dependencies: {
      '@ionic/core': DEFAULT_IONIC_VERSION,
    },
  })
}

const openAngularEditor = async (code: string, options?: EditorOptions) => {
  const [main_ts, app_module_ts, app_component_ts, styles_css, angular_json] = await loadSourceFiles([
    'angular/main.ts',
    'angular/app.module.ts',
    'angular/app.component.ts',
    'angular/styles.css',
    'angular/angular.json'
  ])

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
      'src/index.html': '<app-root></app-root>',
      'src/styles.css': styles_css,
      'angular.json': angular_json,
    },
    dependencies: {
      '@ionic/angular': DEFAULT_IONIC_VERSION,
    },
  });
}

const openReactEditor = async (code: string, options?: EditorOptions) => {
  // Matches the name after `export default` to use as the component tag.
  let componentTagName;
  try {
    componentTagName = new RegExp(/function([\S\s]*?)\(/g).exec(code)[1].trim();
  } catch (e) {
    console.error('Error parsing the component tag name from the React code snippet. Please make sure that the code snippet for React ends with export default ComponentName;');
  }

  if (!componentTagName) {
    return;
  }

  const [index_js, app_tsx] = await loadSourceFiles([
    'react/index.js',
    'react/app.tsx'
  ]);

  const app_tsx_renamed = app_tsx
    // Inserts the component name from the sample into the <IonApp> tag.
    .replace(/<IonApp><\/IonApp>/g, `<IonApp><${componentTagName} /></IonApp>`)
    // Imports the component from our `main` example file.
    .replace(/setupIonicReact\(\);/g, `import ${componentTagName} from "./main";\n\n` + 'setupIonicReact();');

  sdk.openProject({
    template: 'create-react-app',
    title: options?.title ?? DEFAULT_EDITOR_TITLE,
    description: options?.description ?? DEFAULT_EDITOR_DESCRIPTION,
    files: {
      'index.html': `<div id="root"></div>`,
      'index.js': index_js,
      'App.js': app_tsx_renamed,
      'main.js': code,
    },
    dependencies: {
      react: 'latest',
      'react-dom': 'latest',
      '@ionic/react': DEFAULT_IONIC_VERSION,
      // Stackblitz requires this dependency to run
      '@stencil/core': '^2.13.0',
    },
  })
}

const openVueEditor = async (code: string, options?: EditorOptions) => {
  // TODO FW-715: Open Vue editor
  console.warn('Not implemented');
}

export { openAngularEditor, openHtmlEditor, openReactEditor, openVueEditor };
