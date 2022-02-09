import React, { useState, useEffect, useRef } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import sdk from '@stackblitz/sdk';

import CodeBlock from '@theme/CodeBlock';

import './playground.css';

enum UsageTarget {
  Basic = 'Basic',
  Angular = 'Angular',
  React = 'React',
  Vue = 'Vue',
}

const UsageTargetList = Object.keys(UsageTarget);

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

export default function Playground({ children, src, code, title, description }) {
  if (!src || !code) {
    console.warn('No src provided to Playground component');
    return null;
  }

  const codeRef = useRef(null);
  const frameRef = useRef<HTMLIFrameElement>(null);

  const [selected, setSelected] = useState(UsageTarget.Basic);
  const [mode, setMode] = useState(Mode.iOS);
  const [expanded, setExpanded] = useState(false);
  const [codeSnippet, setCodeSnippet] = useState({
    basic: '',
    angular: '',
    react: '',
    vue: '',
  });
  const [frameHeight, setFrameHeight] = useState(200);

  useEffect(() => {
    const fetchCodeSnippets = Promise.all(
      Object.keys(code).map((target) => {
        return new Promise((resolve, reject) => {
          fetch(code[target])
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
      setCodeSnippet(snippets);
    });
  }, []);

  function onMessage(message: MessageEvent<any>) {
    if (message.source !== frameRef.current.contentWindow) {
      return;
    }
    try {
      const ev = JSON.parse(message.data);
      if (ev.type === 'height') {
        // Used to resize the preview container to fit the height of the iframe
        setFrameHeight(ev.data);
      }
    } catch {}
  }

  useEffect(() => {
    window.addEventListener('message', onMessage);

    return function cleanup() {
      window.removeEventListener('message', onMessage);
    };
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

  function copySourceCode() {
    const copyButton = codeRef.current.querySelector('button');
    copyButton.click();
  }

  function openEditor(event) {
    const button = event.target.closest('button');
    // Outer text includes line breaks `\n` to maintain code formatting in editor examples.
    const codeBlock = button.closest('.playground').querySelector('.code-block pre code')?.outerText;
    const editorOptions = {
      title,
      description,
    };

    switch (selected) {
      case UsageTarget.Angular:
        openAngularEditor(codeBlock, editorOptions);
        break;
      case UsageTarget.Basic:
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

  const languages = UsageTargetList.filter((lang) => Object.keys(codeSnippet).includes(lang.toLowerCase()));

  return (
    <div className={`playground playground--mode-${mode}`}>
      <div className="playground__container">
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
              className={
                'playground__control-button ' + (mode === Mode.MD ? 'playground__control-button--selected' : '')
              }
              onClick={() => setMode(Mode.MD)}
            >
              MD
            </button>
          </div>
          <div className="playground__control-group playground__control-group--end">
            {/* Toggle Source Code */}
            <Tippy content={expanded ? 'Hide source code' : 'Show full source'}>
              <button
                className="playground__icon-button"
                aria-label={expanded ? 'Hide source code' : 'Show full source'}
                onClick={() => setExpanded(!expanded)}
              >
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M9 16L5 12L9 8" stroke="current" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 16L19 12L15 8" stroke="current" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </Tippy>
            {/* Open Feedback */}
            <Tippy content="Report an issue">
              <a
                className="playground__icon-button"
                href="https://github.com/ionic-team/ionic-docs/issues/new/choose"
                target="_blank"
              >
                <svg aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2.23077 1H9M9 1V7.76923M9 1L1 9"
                    stroke="current"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </Tippy>
            {/* Copy Code */}
            <Tippy content="Copy to clipboard">
              <button className="playground__icon-button" onClick={copySourceCode}>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M2.06667 9V9C1.47756 9 1 8.52244 1 7.93333V3C1 1.89543 1.89543 1 3 1H7.93333C8.52244 1 9 1.47756 9 2.06667V2.06667"
                    stroke="#92A0B3"
                  />
                  <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="current" />
                </svg>
              </button>
            </Tippy>
            {/* Open Editor */}
            <Tippy content="Edit in StackBlitz">
              <button className="playground__icon-button" title="Edit on Stackblitz" onClick={openEditor}>
                <svg
                  aria-hidden="true"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 11L11 11" stroke="#92A0B3" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M8.88491 1.36289C9.11726 1.13054 9.43241 1 9.76101 1C9.92371 1 10.0848 1.03205 10.2351 1.09431C10.3855 1.15658 10.5221 1.24784 10.6371 1.36289C10.7522 1.47794 10.8434 1.61453 10.9057 1.76485C10.968 1.91517 11 2.07629 11 2.23899C11 2.4017 10.968 2.56281 10.9057 2.71314C10.8434 2.86346 10.7522 3.00004 10.6371 3.11509L3.33627 10.4159L1 11L1.58407 8.66373L8.88491 1.36289Z"
                    stroke="current"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </Tippy>
          </div>
        </div>
        <div className="playground__preview">
          {src ? (
            <iframe
              ref={frameRef}
              key={mode}
              style={{
                minHeight: `${frameHeight}px`,
              }}
              loading="lazy"
              src={`${src}?ionic:mode=${mode}`}
            />
          ) : (
            children
          )}
        </div>
      </div>
      <div
        ref={codeRef}
        className={'playground__code-block ' + (expanded ? 'playground__code-block--expanded' : '')}
        aria-expanded={expanded ? 'true' : 'false'}
      >
        {selected === UsageTarget.Basic && (
          <CodeBlock className="code-block code--html language-html">{codeSnippet['basic'] ?? ''}</CodeBlock>
        )}
        {selected === UsageTarget.Angular && (
          <CodeBlock className="code-block code--angular language-html">{codeSnippet['angular']}</CodeBlock>
        )}
        {selected === UsageTarget.React && (
          <CodeBlock className="code-block code--react language-jsx">{codeSnippet['react']}</CodeBlock>
        )}
        {selected === UsageTarget.Vue && (
          <CodeBlock className="code-block code--vue language-jsx">{codeSnippet['vue']}</CodeBlock>
        )}
      </div>
    </div>
  );
}
