import sdk from '@stackblitz/sdk';

// The default title to use for StackBlitz examples (when not overwritten)
const DEFAULT_EDITOR_TITLE = 'Ionic Docs Example';
// The default description to use for StackBlitz examples (when not overwritten)
const DEFAULT_EDITOR_DESCRIPTION = '';
// Temporary marker used while stripping/restoring HTML comments.
const HTML_COMMENT_PLACEHOLDER = '__HTML_COMMENT_PLACEHOLDER_';
const HTML_COMMENT_REGEX = /<!--[\s\S]*?-->/g;
// Matches a live `window.Ionic = { config: ... }` assignment.
// Also captures JS comments directly above it (// or /* */).
// Captures: (1) leading indent, (2) optional comment block,
// and (3) inner config object so comments can be re-attached
// when the assignment is moved into the generated head script.
const WINDOW_IONIC_CONFIG_ASSIGNMENT_REGEX =
  /^([ \t]*)((?:\/\/[^\n]*\n[ \t]*)+|\/\*[\s\S]*?\*\/\s*)?window\.Ionic\s*=\s*\{\s*config\s*:\s*(\{[\s\S]*?\})\s*,?\s*\};?[ \t]*/m;

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
  includeIonContent?: boolean;

  /**
   * The mode of the StackBlitz example.
   */
  mode?: string;

  /**
   * The major version of Ionic to use in the generated StackBlitz example.
   * For example: `9` for Ionic 9.
   */
  version: string;
}

// Returns the inner content of a `{ ... }` config string.
// If braces are missing or malformed, returns an empty string.
const getConfigInnerContent = (config: string) => {
  const firstBrace = config.indexOf('{');
  const lastBrace = config.lastIndexOf('}');
  if (firstBrace === -1 || lastBrace === -1 || firstBrace >= lastBrace) {
    return '';
  }
  return config.slice(firstBrace + 1, lastBrace);
};

/**
 * Formats the Ionic config object for the generated StackBlitz example.
 * Always emits canonical 2-space indentation, and returns `{}` when mode is missing.
 */
const getFormattedIonicConfig = (options?: Pick<EditorOptions, 'mode'>) => {
  if (!options?.mode) {
    return '{}';
  }
  return `{\n  mode: ${JSON.stringify(options.mode)}\n}`;
};

// Merges the generated mode config into an existing config object string.
// The existing inner content is re-indented to canonical 2 spaces so embedded
// comments and properties align consistently, regardless of how deep the source
// snippet's config was nested.
const mergeFormattedIonicConfig = (existingConfig: string | undefined, modeConfig: string) => {
  if (!existingConfig) {
    return modeConfig;
  }

  const modeInner = getConfigInnerContent(modeConfig).trim();
  if (modeInner.length === 0) {
    return existingConfig;
  }

  const existingLines = getConfigInnerContent(existingConfig)
    .split('\n')
    .filter((line) => line.trim().length > 0);
  if (existingLines.length === 0) {
    return `{\n  ${modeInner}\n}`;
  }

  const minIndent = Math.min(...existingLines.map((line) => line.match(/^\s*/)?.[0].length ?? 0));
  const normalizedInner = existingLines
    .map((line) => `  ${line.slice(minIndent)}`)
    .join('\n')
    .replace(/,$/, '');

  return `{\n${normalizedInner},\n  ${modeInner}\n}`;
};

// Indents every line after the first so a multi-line config can be
// safely inlined after `config:` without shifting the first line.
const indentConfig = (config: string, baseIndent: string) =>
  config
    .split('\n')
    .map((line, index) => (index === 0 ? line : `${baseIndent}${line}`))
    .join('\n');

// Normalizes a captured comment block to a target indent while preserving
// relative spacing inside the block (for example `*` alignment in JSDoc).
const reindentCommentBlock = (comment: string | undefined, indent: string) => {
  if (!comment) return '';
  const lines = comment.split('\n').filter((line) => line.trim().length > 0);
  if (lines.length === 0) return '';
  const minIndent = Math.min(...lines.map((line) => line.match(/^\s*/)?.[0].length ?? 0));
  return lines.map((line) => `${indent}${line.slice(minIndent)}`).join('\n');
};

// Inserts the final Ionic config object into the generated framework code.
// The merged config is re-indented to align with the call expression's own
// indentation in the source, so deeply nested calls (e.g. provideIonicAngular
// inside a providers array) stay visually consistent.
const injectFrameworkIonicConfig = (
  source: string,
  pattern: RegExp,
  ionicConfig: string,
  rebuild: (mergedConfig: string) => string
) =>
  source.replace(pattern, (...args: unknown[]) => {
    const existing = args[1] as string | undefined;
    const offset = args[args.length - 2] as number;
    const full = args[args.length - 1] as string;

    const lineStart = full.lastIndexOf('\n', offset - 1) + 1;
    const callIndent = full.slice(lineStart, offset).match(/^[ \t]*/)?.[0] ?? '';

    const merged = mergeFormattedIonicConfig(existing, ionicConfig);
    return rebuild(indentConfig(merged, callIndent));
  });

// Temporarily masks HTML comments so window.Ionic extraction does not parse
// commented-out script blocks as live code.
const maskHtmlComments = (html: string) => {
  const commentPlaceholders: string[] = [];
  const maskedHtml = html.replace(HTML_COMMENT_REGEX, (commentBlock) => {
    const placeholder = `${HTML_COMMENT_PLACEHOLDER}${commentPlaceholders.length}__`;
    commentPlaceholders.push(commentBlock);
    return placeholder;
  });

  return {
    maskedHtml,
    restore: (text: string) =>
      text.replace(
        new RegExp(`${HTML_COMMENT_PLACEHOLDER}(\\d+)__`, 'g'),
        (_, index: string) => commentPlaceholders[Number(index)]
      ),
  };
};

// Extracts live `window.Ionic = { config: ... }` assignments from snippet code.
// Returns cleaned source, merged config payload, and an attached leading
// JS comment (if present) so callers can re-inject it in generated output.
const extractHtmlIonicConfig = (code: string, ionicConfig: string) => {
  let existingConfig: string | undefined;
  let leadingComment: string | undefined;
  const { maskedHtml, restore } = maskHtmlComments(code);

  let cleanedCode = maskedHtml.replace(
    WINDOW_IONIC_CONFIG_ASSIGNMENT_REGEX,
    (_, indent: string, comment: string | undefined, config: string) => {
      if (comment && comment.trim().length > 0) {
        // Re-attach the leading indent that `^[ \t]*` consumed so the
        // comment's first line stays aligned with the rest of the block.
        leadingComment = `${indent}${comment.trim()}`;
      }
      existingConfig = config;
      return '';
    }
  );

  cleanedCode = cleanedCode
    .replace(/<script>\s*\n([ \t]*\n)+/g, '<script>\n')
    .replace(/<script>\s*<\/script>/g, '')
    .replace(/\n{3,}/g, '\n\n');

  return {
    code: restore(cleanedCode),
    ionicConfig: mergeFormattedIonicConfig(existingConfig, ionicConfig),
    leadingComment,
  };
};

// Inserts the final `window.Ionic` script into the generated HTML head,
// preserving snippet content and reattached config comments.
const injectHtmlIonicConfig = (templateHtml: string, code: string, options?: Pick<EditorOptions, 'mode'>) => {
  const htmlConfig = extractHtmlIonicConfig(code, getFormattedIonicConfig(options));
  const ionicConfig = indentConfig(htmlConfig.ionicConfig, '      ');
  const leadingComment = reindentCommentBlock(htmlConfig.leadingComment, '    ');

  return templateHtml.replace(/{{ TEMPLATE }}/g, htmlConfig.code).replace(
    '</head>',
    `
  <script>
${leadingComment ? `${leadingComment}\n` : ''}    window.Ionic = {
      config: ${ionicConfig}
    };
  </script>
</head>
`
  );
};

// Merges playground-specific dependency overrides
// into package.json dependencies.
const mergeEditorDependencies = (packageJson: any, dependencies?: Record<string, string>) => {
  if (!dependencies) {
    return packageJson;
  }

  return {
    ...packageJson,
    dependencies: {
      ...packageJson.dependencies,
      ...dependencies,
    },
  };
};

// Opens a StackBlitz project with shared template/title/description defaults.
const openStackBlitzProject = (files: Record<string, string>, options?: EditorOptions) => {
  sdk.openProject({
    template: 'node',
    title: options?.title ?? DEFAULT_EDITOR_TITLE,
    description: options?.description ?? DEFAULT_EDITOR_DESCRIPTION,
    files,
  });
};

// Loads framework template files from static StackBlitz scaffolds
// for a docs version.
const loadSourceFiles = async (files: string[], version: string) => {
  const versionDir = `v${version}`;
  const sourceFiles = await Promise.all(files.map((f) => fetch(`/docs/code/stackblitz/${versionDir}/${f}`)));
  return await Promise.all(sourceFiles.map((res) => res.text()));
};

// Builds and opens the HTML playground project.
const openHtmlEditor = async (code: string, options: EditorOptions) => {
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

  const package_json = mergeEditorDependencies(JSON.parse(defaultFiles[3]), options?.dependencies);

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

  files[indexHtml] = injectHtmlIonicConfig(defaultFiles[1], code, options);

  openStackBlitzProject(files, options);
};

// Builds and opens the Angular playground project.
const openAngularEditor = async (code: string, options: EditorOptions) => {
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

  const package_json = mergeEditorDependencies(JSON.parse(defaultFiles[0]), options?.dependencies);

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

  const ionicConfig = getFormattedIonicConfig(options);
  // Angular v6 uses IonicModule.forRoot. Angular v7+ use provideIonicAngular.
  files[main] =
    options.version === '6'
      ? injectFrameworkIonicConfig(
          files[main],
          /IonicModule\.forRoot\(\s*(\{[\s\S]*?\})?\s*\)/s,
          ionicConfig,
          (c) => `IonicModule.forRoot(${c})`
        )
      : injectFrameworkIonicConfig(
          files[main],
          /provideIonicAngular\(\s*(\{[\s\S]*?\})?\s*\)/s,
          ionicConfig,
          (c) => `provideIonicAngular(${c})`
        );

  openStackBlitzProject(files, options);
};

// Builds and opens the React playground project.
const openReactEditor = async (code: string, options: EditorOptions) => {
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

  const package_json = mergeEditorDependencies(JSON.parse(defaultFiles[4]), options?.dependencies);

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

  files[appTsx] = injectFrameworkIonicConfig(
    files[appTsx],
    /setupIonicReact\(\s*(\{[\s\S]*?\})?\s*\)/s,
    getFormattedIonicConfig(options),
    (c) => `setupIonicReact(${c})`
  );

  openStackBlitzProject(files, options);
};

// Builds and opens the Vue playground project.
const openVueEditor = async (code: string, options: EditorOptions) => {
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

  const package_json = mergeEditorDependencies(JSON.parse(defaultFiles[0]), options?.dependencies);

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

  files[mainTs] = injectFrameworkIonicConfig(
    files[mainTs],
    /\.use\(IonicVue(?:,\s*(\{[\s\S]*?\}))?\)/s,
    getFormattedIonicConfig(options),
    (c) => `.use(IonicVue, ${c})`
  );

  /**
   * We have to use StackBlitz web containers here (node template), due
   * to multiple issues with Vite, Vue/Vue Router and Vue 3's script setup.
   *
   * https://github.com/stackblitz/core/issues/1308
   */
  openStackBlitzProject(files, options);
};

export { openAngularEditor, openHtmlEditor, openReactEditor, openVueEditor };
export { getFormattedIonicConfig, mergeFormattedIonicConfig, extractHtmlIonicConfig };
