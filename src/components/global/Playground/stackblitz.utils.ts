import sdk from '@stackblitz/sdk';

import type { IonicConfig } from './playground.types';

// The default title to use for StackBlitz examples (when not overwritten)
const DEFAULT_EDITOR_TITLE = 'Ionic Docs Example';
// The default description to use for StackBlitz examples (when not overwritten)
const DEFAULT_EDITOR_DESCRIPTION = '';

export interface EditorOptions {
  /**
   * The title of the StackBlitz example.
   */
  title?: string;
  /**
   * The description of the StackBlitz example.
   */
  description?: string;

  files?: {
    [key: string]: string;
  };

  /**
   * List of dependencies to add to the StackBlitz example.
   * The key is the name of the dependency and the value is the version.
   */
  dependencies?: {
    [key: string]: string;
  };

  /**
   * `true` if `ion-app` and `ion-content` should automatically be injected into the
   * StackBlitz example.
   */
  includeIonContent: boolean;

  /**
   * The mode of the StackBlitz example.
   */
  mode?: string;

  /**
   * Ionic config values to inject into the generated StackBlitz bootstrap.
   */
  ionicConfig?: IonicConfig;

  /**
   * The major version of Ionic to use in the generated StackBlitz example.
   * For example: `9` for Ionic 9.
   */
  version?: string;
}

/**
 * Formats the Ionic config object for the generated StackBlitz example.
 * @param options The editor options.
 * @param indent The number of spaces to indent the formatted Ionic config object.
 * @returns The formatted Ionic config object.
 */
const getFormattedIonicConfig = (options?: EditorOptions, indent = 0) => {
  const config: IonicConfig = {
    ...options?.ionicConfig,
    ...(options?.mode ? { mode: options.mode } : {}),
  };

  const entries = Object.entries(config).filter(
    (entry): entry is [string, boolean | number | string] =>
      typeof entry[1] === 'boolean' || typeof entry[1] === 'number' || typeof entry[1] === 'string'
  );

  if (entries.length === 0) {
    return '{}';
  }

  const pad = ' '.repeat(indent);
  const propertyPad = ' '.repeat(indent + 2);
  const lines = entries.map(([key, value]) => `${propertyPad}${JSON.stringify(key)}: ${JSON.stringify(value)}`);

  return `{\n${lines.join(',\n')}\n${pad}}`;
};

const loadSourceFiles = async (files: string[], version: string) => {
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
      'html/package-lock.json',
      'html/tsconfig.json',
      'html/vite.config.ts',
    ],
    options.version
  );

  const package_json = JSON.parse(defaultFiles[3]);

  if (options?.dependencies) {
    package_json.dependencies = {
      ...package_json.dependencies,
      ...options.dependencies,
    };
  }

  const indexHtml = 'index.html';
  const files = {
    'package.json': JSON.stringify(package_json, null, 2),
    'package-lock.json': defaultFiles[4],
    'index.ts': defaultFiles[0],
    [indexHtml]: defaultFiles[1],
    'theme/variables.css': defaultFiles[2],
    'tsconfig.json': defaultFiles[5],
    'vite.config.ts': defaultFiles[6],
    ...options?.files,
  };

  const ionicConfig = getFormattedIonicConfig(options, 6);

  files[indexHtml] = defaultFiles[1].replace(/{{ TEMPLATE }}/g, code).replace(
    '</head>',
    `
  <script>
    window.Ionic = {
      config: ${ionicConfig}
    };
  </script>
</head>
`
  );

  sdk.openProject({
    template: 'node',
    title: options?.title ?? DEFAULT_EDITOR_TITLE,
    description: options?.description ?? DEFAULT_EDITOR_DESCRIPTION,
    files,
  });
};

const openAngularEditor = async (code: string, options?: EditorOptions) => {
  const defaultFiles = await loadSourceFiles(
    [
      'angular/package.json',
      'angular/package-lock.json',
      'angular/angular.json',
      'angular/tsconfig.json',
      'angular/tsconfig.app.json',
      'angular/main.ts',
      'angular/index.html',
      'angular/app.routes.ts',
      options?.includeIonContent ? 'angular/app.component.withContent.ts' : 'angular/app.component.ts',
      'angular/app.component.css',
      options?.includeIonContent ? 'angular/app.component.withContent.html' : 'angular/app.component.html',
      'angular/example.component.ts',
      'angular/styles.css',
      'angular/global.css',
      'angular/variables.css',
    ],
    options.version
  );

  const package_json = JSON.parse(defaultFiles[0]);

  if (options?.dependencies) {
    package_json.dependencies = {
      ...package_json.dependencies,
      ...options.dependencies,
    };
  }

  const main = 'src/main.ts';

  const files = {
    'package.json': JSON.stringify(package_json, null, 2),
    'package-lock.json': defaultFiles[1],
    'angular.json': defaultFiles[2],
    'tsconfig.json': defaultFiles[3],
    'tsconfig.app.json': defaultFiles[4],
    [main]: defaultFiles[5],
    'src/index.html': defaultFiles[6],
    'src/polyfills.ts': `import 'zone.js';`,
    'src/app/app.routes.ts': defaultFiles[7],
    'src/app/app.component.ts': defaultFiles[8],
    'src/app/app.component.css': defaultFiles[9],
    'src/app/app.component.html': defaultFiles[10],
    'src/app/example.component.ts': defaultFiles[11],
    'src/app/example.component.html': code,
    'src/app/example.component.css': '',
    'src/styles.css': defaultFiles[12],
    'src/global.css': defaultFiles[13],
    'src/theme/variables.css': defaultFiles[14],
    ...options?.files,
  };

  const ionicConfig = getFormattedIonicConfig(options, 4);

  if (options?.version === '6') {
    files[main] = files[main].replace(
      'importProvidersFrom(IonicModule.forRoot({ }))',
      `importProvidersFrom(IonicModule.forRoot(${ionicConfig}))`
    );
  } else {
    files[main] = files[main].replace(
      /provideIonicAngular\(\s*(\{[^}]*\})?\s*\)/s,
      `provideIonicAngular(${ionicConfig})`
    );
  }

  sdk.openProject({
    template: 'node',
    title: options?.title ?? DEFAULT_EDITOR_TITLE,
    description: options?.description ?? DEFAULT_EDITOR_DESCRIPTION,
    files,
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
      'react/vite.config.js',
      'react/browserslistrc',
      'react/eslintrc.js',
    ],
    options.version
  );

  const package_json = JSON.parse(defaultFiles[4]);

  if (options?.dependencies) {
    package_json.dependencies = {
      ...package_json.dependencies,
      ...options.dependencies,
    };
  }

  const appTsx = 'src/App.tsx';
  const files = {
    '.eslintrc.js': defaultFiles[9],
    '.browserslistrc': defaultFiles[8],
    'vite.config.js': defaultFiles[7],
    'index.html': defaultFiles[6],
    'src/index.tsx': defaultFiles[0],
    [appTsx]: defaultFiles[1],
    'src/main.tsx': code,
    'src/theme/variables.css': defaultFiles[2],
    'tsconfig.json': defaultFiles[3],
    'package.json': JSON.stringify(package_json, null, 2),
    'package-lock.json': defaultFiles[5],
    ...options?.files,
    '.stackblitzrc': `{
  "startCommand": "yarn run start"
}`,
  };

  const ionicConfig = getFormattedIonicConfig(options);

  files[appTsx] = files[appTsx].replace(/setupIonicReact\(\s*(\{[^}]*\})?\s*\)/s, `setupIonicReact(${ionicConfig})`);

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
    ],
    options.version
  );

  const package_json = JSON.parse(defaultFiles[0]);

  if (options?.dependencies) {
    package_json.dependencies = {
      ...package_json.dependencies,
      ...options.dependencies,
    };
  }

  const mainTs = 'src/main.ts';
  const files = {
    'src/App.vue': defaultFiles[6],
    'src/components/Example.vue': code,
    [mainTs]: defaultFiles[5],
    'src/theme/variables.css': defaultFiles[3],
    'index.html': defaultFiles[2],
    'vite.config.ts': defaultFiles[4],
    'package.json': JSON.stringify(package_json, null, 2),
    'package-lock.json': defaultFiles[1],
    'tsconfig.json': defaultFiles[7],
    'tsconfig.node.json': defaultFiles[8],
    ...options?.files,
    '.stackblitzrc': `{
  "startCommand": "yarn run dev"
}`,
  };

  const ionicConfig = getFormattedIonicConfig(options);

  files[mainTs] = files[mainTs].replace(/\.use\(IonicVue(?:,\s*\{[^}]*\})?\)/s, `.use(IonicVue, ${ionicConfig})`);

  /**
   * We have to use StackBlitz web containers here (node template), due
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
