import React, { useState, useEffect } from 'react';
import useScript from 'react-script-hook';

import sdk from '@stackblitz/sdk';

import CodeBlock from '@theme/CodeBlock';

import './playground.css';

enum UsageTarget {
  HTML = 'HTML',
  Angular = 'Angular',
  React = 'React',
  Vue = 'Vue',
}

const UsageTargetList = Object.keys(UsageTarget);

enum Theme {
  Light = 'light',
  Dark = 'dark',
}

enum Mode {
  iOS = 'ios',
  MD = 'md',
}

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

// The default title to use for Stackblitz examples (when not overwritten)
const DEFAULT_EDITOR_TITLE = 'Ionic Docs Example';
// The default description to use for Stackblitz examples (when not overwritten)
const DEFAULT_EDITOR_DESCRIPTION = '';

// Default package version to use for all @ionic/* packages.
const DEFAULT_IONIC_VERSION = '^6.0.0';

/**
 * Playground component for live preview of Ionic doc examples.
 * Allows developers to open individual examples in live code editor.
 *
 * @see https://developer.stackblitz.com/docs/platform/javascript-sdk
 */

const ToggleCodeButton = ({ expanded, setExpanded }) => {
  return (
    <button
      type="button"
      className="code-block-source__button"
      aria-expanded={expanded ? 'true' : 'false'}
      onClick={() => setExpanded(!expanded)}
    >
      {expanded ? 'Hide code' : 'Show code'}
    </button>
  );
};

const CodeBlockButton = ({ language, selected, setSelected }) => {
  return (
    <button
      type="button"
      title={`Show ${language} code`}
      className={'playground__control-button ' + (selected === language ? 'playground__control-button--selected' : '')}
      onClick={() => setSelected(language)}
    >
      {language}
    </button>
  );
};

/**
 * Parses MDX formatted text and returns the inner
 * contents of the block.
 */
function convertMdxToCode(text: string) {
  const regexp = new RegExp(/`{3}([\S\s]*?)`{3}([^`]*)([\S\s]*?)/g);
  const regexpResult = regexp.exec(text);
  let sourceCode = '';
  if (regexpResult) {
    const sourceCodeLines = regexpResult[1].split('\n');
    // Removes any language indicator for code formatting
    sourceCodeLines.shift();
    sourceCode = sourceCodeLines.join('\n');
  }
  return sourceCode;
}

export default function Playground({ children, src, title, description }) {
  if (!src) {
    console.warn('No src provided to Playground component');
    return null;
  }

  const [selected, setSelected] = useState(UsageTarget.HTML);
  const [theme, setTheme] = useState(Theme.Light);
  const [mode, setMode] = useState(Mode.iOS);
  const [expanded, setExpanded] = useState(false);
  const [code, setCode] = useState({});

  useEffect(() => {
    const fetchCodeSnippets = Promise.all(
      Object.keys(src).map((target) => {
        return new Promise((resolve, reject) => {
          fetch(src[target])
            .then((res) =>
              res.text().then((text) =>
                resolve({
                  [target]: text,
                })
              )
            )
            .catch((err) => {
              console.error('Error loading source file for ' + target, err);
              reject();
            });
        });
      })
    );

    fetchCodeSnippets.then((res) => {
      const snippets = Object.assign({}, ...res);
      Object.keys(snippets).forEach((key) => {
        snippets[key] = convertMdxToCode(snippets[key]);
      });
      setCode(snippets);
    });
  }, []);

  const [loading, error] = useScript({
    src: 'https://cdn.jsdelivr.net/npm/@ionic/core@latest/dist/ionic/ionic.js',
    checkForExisting: true,
  });

  async function openHtmlEditor(codeBlock: string, options?: EditorOptions) {
    const indexTs = convertMdxToCode(await (await fetch('/docs/code/stackblitz/html/index.ts.md')).text());
    const indexHtml = convertMdxToCode(await (await fetch('/docs/code/stackblitz/html/index.html.md')).text());

    sdk.openProject({
      template: 'typescript',
      title: options?.title ?? DEFAULT_EDITOR_TITLE,
      description: options?.description ?? DEFAULT_EDITOR_DESCRIPTION,
      files: {
        // Injects our code sample into the body of the HTML document
        'index.html': indexHtml.replace(/<body><\/body>/g, `<body>\n` + codeBlock + '</body>'),
        'index.ts': indexTs,
      },
      dependencies: {
        '@ionic/core': DEFAULT_IONIC_VERSION,
      },
    });
  }

  async function openAngularEditor(codeBlock: string, options?: EditorOptions) {
    const main_ts = convertMdxToCode(await (await fetch('/docs/code/stackblitz/angular/main.md')).text());
    const app_module_ts = convertMdxToCode(await (await fetch('/docs/code/stackblitz/angular/app.module.md')).text());
    const app_component_ts = convertMdxToCode(
      await (await fetch('/docs/code/stackblitz/angular/app.component.md')).text()
    );
    const styles_css = convertMdxToCode(await (await fetch('/docs/code/stackblitz/angular/styles.md')).text());
    const angular_json = await (await fetch('/docs/code/stackblitz/angular/angular.json')).text();

    sdk.openProject({
      template: 'angular-cli',
      title: options?.title ?? DEFAULT_EDITOR_TITLE,
      description: options?.description ?? DEFAULT_EDITOR_DESCRIPTION,
      files: {
        'src/main.ts': main_ts,
        'src/polyfills.ts': `import 'zone.js/dist/zone';`,
        'src/app/app.module.ts': app_module_ts,
        'src/app/app.component.ts': app_component_ts,
        'src/app/app.component.html': codeBlock,
        'src/index.html': '<app-root></app-root>',
        'src/styles.css': styles_css,
        'angular.json': angular_json,
      },
      dependencies: {
        '@ionic/angular': DEFAULT_IONIC_VERSION,
      },
    });
  }

  async function openReactEditor(codeBlock: string, options?: EditorOptions) {
    // Matches the name after `export default` to use as the component tag.
    const componentTagName = new RegExp(/function([\S\s]*?)\(/g).exec(codeBlock)[1].trim();

    const index_js = convertMdxToCode(await (await fetch('/docs/code/stackblitz/react/index.md')).text());
    const app_tsx = convertMdxToCode(await (await fetch('/docs/code/stackblitz/react/app.md')).text())
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
        'App.js': app_tsx,
        'main.js': codeBlock,
      },
      dependencies: {
        react: 'latest',
        'react-dom': 'latest',
        '@ionic/react': DEFAULT_IONIC_VERSION,
        // Stackblitz requires this dependency to run
        '@stencil/core': '^2.13.0',
      },
    });
  }

  async function openVueEditor(codeBlock: string, options?: EditorOptions) {
    const main_js = convertMdxToCode(await (await fetch('/docs/code/stackblitz/vue/main.md')).text());
    const app_vue = convertMdxToCode(await (await fetch('/docs/code/stackblitz/vue/app.md')).text());

    sdk.openProject({
      template: 'vue',
      title: options?.title ?? DEFAULT_EDITOR_TITLE,
      description: options?.description ?? DEFAULT_EDITOR_DESCRIPTION,
      files: {
        'src/main.js': main_js,
        'src/App.vue': app_vue,
        'src/components/Example.vue': codeBlock,
        'public/index.html': '<div id="app"></div>',
      },
      dependencies: {
        vue: '^3.0.0',
        'vue-router': '^4.0.12',
        '@ionic/vue': DEFAULT_IONIC_VERSION,
        // Stackblitz requires this dependency to run
        '@stencil/core': '^2.13.0',
      },
    });
  }

  function openEditor(event) {
    const button = event.target.closest('button');
    // Outer text includes line breaks `\n` to maintain code formatting in editor examples.
    const codeBlock = button.parentElement.parentElement.querySelector('.code-block pre code')?.outerText;
    const editorOptions = {
      title,
      description,
    };
    switch (selected) {
      case UsageTarget.Angular:
        openAngularEditor(codeBlock, editorOptions);
        break;
      case UsageTarget.HTML:
        openHtmlEditor(codeBlock, editorOptions);
        break;
      case UsageTarget.React:
        openReactEditor(codeBlock, editorOptions);
        break;
      case UsageTarget.Vue:
        openVueEditor(codeBlock, editorOptions);
        break;
    }
  }

  const languages = UsageTargetList.filter((lang) => Object.keys(code).includes(lang.toLowerCase()));

  return (
    <div className={`playground playground--theme-${theme} playground--mode-${mode}`}>
      <div className="playground__control-toolbar">
        <div className="playground__control-group">
          {languages.map((language) => (
            <CodeBlockButton key={language} language={language} selected={selected} setSelected={setSelected} />
          ))}
        </div>
        <div className="playground__control-group">
          <button
            type="button"
            className={
              'playground__control-button ' + (mode === Mode.iOS ? 'playground__control-button--selected' : '')
            }
            onClick={() => setMode(Mode.iOS)}
          >
            iOS
          </button>
          <button
            type="button"
            className={'playground__control-button ' + (mode === Mode.MD ? 'playground__control-button--selected' : '')}
            onClick={() => setMode(Mode.MD)}
          >
            MD
          </button>
        </div>
        <div className="playground__control-group">
          <button
            className={
              'playground__control-button ' + (theme === Theme.Light ? 'playground__control-button--selected' : '')
            }
            type="button"
            title="Enable Light Theme"
            onClick={() => setTheme(Theme.Light)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256,118a22,22,0,0,1-22-22V48a22,22,0,0,1,44,0V96A22,22,0,0,1,256,118Z" />
              <path d="M256,486a22,22,0,0,1-22-22V416a22,22,0,0,1,44,0v48A22,22,0,0,1,256,486Z" />
              <path d="M369.14,164.86a22,22,0,0,1-15.56-37.55l33.94-33.94a22,22,0,0,1,31.11,31.11l-33.94,33.94A21.93,21.93,0,0,1,369.14,164.86Z" />
              <path d="M108.92,425.08a22,22,0,0,1-15.55-37.56l33.94-33.94a22,22,0,1,1,31.11,31.11l-33.94,33.94A21.94,21.94,0,0,1,108.92,425.08Z" />
              <path d="M464,278H416a22,22,0,0,1,0-44h48a22,22,0,0,1,0,44Z" />
              <path d="M96,278H48a22,22,0,0,1,0-44H96a22,22,0,0,1,0,44Z" />
              <path d="M403.08,425.08a21.94,21.94,0,0,1-15.56-6.45l-33.94-33.94a22,22,0,0,1,31.11-31.11l33.94,33.94a22,22,0,0,1-15.55,37.56Z" />
              <path d="M142.86,164.86a21.89,21.89,0,0,1-15.55-6.44L93.37,124.48a22,22,0,0,1,31.11-31.11l33.94,33.94a22,22,0,0,1-15.56,37.55Z" />
              <path d="M256,358A102,102,0,1,1,358,256,102.12,102.12,0,0,1,256,358Z" />
            </svg>
          </button>
          <button
            className={
              'playground__control-button ' + (theme === Theme.Dark ? 'playground__control-button--selected' : '')
            }
            type="button"
            title="Enable Dark Theme"
            onClick={() => setTheme(Theme.Dark)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M264,480A232,232,0,0,1,32,248C32,154,86,69.72,169.61,33.33a16,16,0,0,1,21.06,21.06C181.07,76.43,176,104.66,176,136c0,110.28,89.72,200,200,200,31.34,0,59.57-5.07,81.61-14.67a16,16,0,0,1,21.06,21.06C442.28,426,358,480,264,480Z" />
            </svg>
          </button>
        </div>
        <button
          className="playground__control-button playground__control-button--editor"
          title="Edit on Stackblitz"
          onClick={openEditor}
        >
          Open Editor
        </button>
      </div>
      {/* Applying `mode` at this node will update the playground example to mode="md" or mode="ios". */}
      <div className={`playground__preview playground__preview-theme--${theme}`} key={mode} {...{ mode }}>
        {children}
      </div>
      <div className={'playground__code-block ' + (expanded ? 'playground__code-block--expanded' : '')}>
        {selected === UsageTarget.HTML && (
          <CodeBlock className="code-block code--html language-html">{code['html'] ?? ''}</CodeBlock>
        )}
        {selected === UsageTarget.Angular && (
          <CodeBlock className="code-block code--angular language-html">{code['angular']}</CodeBlock>
        )}
        {selected === UsageTarget.React && (
          <CodeBlock className="code-block code--react language-jsx">{code['react']}</CodeBlock>
        )}
        {selected === UsageTarget.Vue && (
          <CodeBlock className="code-block code--vue language-jsx">{code['vue']}</CodeBlock>
        )}
      </div>
      <ToggleCodeButton expanded={expanded} setExpanded={setExpanded} />
    </div>
  );
}
