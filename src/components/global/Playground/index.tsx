import React, { useEffect, useMemo, useRef, useState } from 'react';

import useBaseUrl from '@docusaurus/useBaseUrl';
import './playground.css';
import { EditorOptions, openAngularEditor, openHtmlEditor, openReactEditor, openVueEditor } from './stackblitz.utils';
import { Mode, UsageTarget } from './playground.types';
import useThemeContext from '@theme/hooks/useThemeContext';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import PlaygroundTabs from '../PlaygroundTabs';
import TabItem from '@theme/TabItem';

import { IconHtml, IconTs, IconVue, IconDefault, IconCss, IconDots } from './icons';

const ControlButton = ({
  isSelected,
  handleClick,
  title,
  label,
  disabled,
}: {
  isSelected: boolean;
  handleClick: () => void;
  title: string;
  label: string;
  disabled?: boolean;
}) => {
  const controlButton = (
    <button
      title={disabled ? undefined : title}
      disabled={disabled}
      className={`playground__control-button ${isSelected ? 'playground__control-button--selected' : ''}`}
      onClick={handleClick}
      data-text={label}
    >
      {label}
    </button>
  );
  if (disabled) {
    return (
      <Tippy theme="playground" arrow={false} placement="bottom" content={`Unavailable for ${label}`}>
        {/* Tippy requires a wrapper element for disabled elements: https://atomiks.github.io/tippyjs/v5/creating-tooltips/#disabled-elements */}
        <div>{controlButton}</div>
      </Tippy>
    );
  }
  return controlButton;
};

const CodeBlockButton = ({ language, usageTarget, setUsageTarget, disabled }) => {
  const langValue = UsageTarget[language];
  return (
    <ControlButton
      isSelected={usageTarget === langValue}
      handleClick={() => {
        setUsageTarget(langValue);
      }}
      title={`Show ${language} code`}
      label={language}
      disabled={disabled}
    />
  );
};

type MdxContent = () => {};

/**
 * The advanced configuration of options when creating a
 * playground example with multiple files for a single usage target
 * or if needing to modify the generated Stackblitz example code.
 */
interface UsageTargetOptions {
  /**
   * The list of the file names to use in the Stackblitz example
   * and their associated MDX content.
   *
   * ```ts
   * files: {
   *   'src/app/app.component.html': app_component_html,
   *   'src/app/app.component.ts': app_component_ts,
   * }
   * ```
   */
  files: {
    [key: string]: MdxContent;
  };
}

/**
 * @param code The code snippets for each supported framework target.
 * @param title Optional title of the generated playground example. Specify to customize the Stackblitz title.
 * @param description Optional description of the generated playground example. Specify to customize the Stackblitz description.
 * @param src The absolute path to the playground demo. For example: `/usage/button/basic/demo.html`
 * @param size The height of the playground. Supports `xsmall`, `small`, `medium`, `large`, 'xlarge' or any string value.
 * @param devicePreview `true` if the playground example should render in a device frame (iOS/MD).
 */
export default function Playground({
  code,
  title,
  description,
  src,
  size = 'small',
  mode,
  devicePreview,
  includeIonContent = true,
  version,
}: {
  code: { [key in UsageTarget]?: MdxContent | UsageTargetOptions };
  title?: string;
  src: string;
  size: string;
  /**
   * Restricts the playground to a single specified mode.
   * If not specified, the user can toggle between modes.
   * Acceptable values are: `ios` or `md`.
   */
  mode?: 'ios' | 'md';
  description?: string;
  devicePreview?: boolean;
  includeIonContent: boolean;
  /**
   * The major version of Ionic to use in the generated Stackblitz examples.
   * This will also load assets for Stackblitz from the specified version directory.
   */
  version: number;
}) {
  if (!code || Object.keys(code).length === 0) {
    console.warn('No code usage examples provided for this Playground example.');
    return;
  }
  if (typeof mode !== 'undefined' && mode !== 'ios' && mode !== 'md') {
    console.warn(`Invalid mode provided: ${mode}. Accepted values are: "ios" or "md".`);
    return;
  }
  if (typeof version === 'undefined') {
    console.warn('You must specify a `version` for the Playground example. For example: <Playground version="7" />');
    return;
  }

  const { isDarkTheme } = useThemeContext();

  const hostRef = useRef<HTMLDivElement | null>(null);
  const codeRef = useRef(null);
  const frameiOS = useRef<HTMLIFrameElement | null>(null);
  const frameMD = useRef<HTMLIFrameElement | null>(null);

  const defaultMode = typeof mode !== 'undefined' ? mode : Mode.iOS;

  const getDefaultUsageTarget = () => {
    // If defined, Angular target should be the default
    if (code[UsageTarget.Angular] !== undefined) {
      return UsageTarget.Angular;
    }

    // Otherwise, default to the first target passed.
    return Object.keys(code)[0];
  };

  /**
   * Developers can set a predefined size
   * or an explicit pixel value.
   */
  const frameSize = FRAME_SIZES[size] || size;
  const [usageTarget, setUsageTarget] = useState(getDefaultUsageTarget());
  const [ionicMode, setIonicMode] = useState(defaultMode);
  const [codeSnippets, setCodeSnippets] = useState({});
  const [renderIframes, setRenderIframes] = useState(false);
  const [iframesLoaded, setIframesLoaded] = useState(false);

  /**
   * Rather than encode isDarkTheme into the frame source
   * url, we post a message to each frame so that
   * dark mode can be enabled without a full page reload.
   */
  const postDarkThemeMessage = async () => {
    if (frameiOS.current && frameMD.current) {
      await Promise.all([waitForFrame(frameiOS.current), waitForFrame(frameMD.current)]);

      const message = { darkMode: isDarkTheme };
      /**
       * When changing the versioned docs, the frame reference can be undefined
       * after the waitForFrame promise resolves.
       *
       * We need to check for the iOS frame reference before posting the message.
       */
      if (frameiOS.current) {
        frameiOS.current.contentWindow.postMessage(message);
      }
      /**
       * When changing the versioned docs, the frame reference can be undefined
       * after the waitForFrame promise resolves.
       *
       * We need to check for the MD frame reference before posting the message.
       */
      if (frameMD.current) {
        frameMD.current.contentWindow.postMessage(message);
      }
    }
  };

  const handleFrameRef = (ref: HTMLIFrameElement, frameMode: 'ios' | 'md') => {
    if (frameMode === 'ios') {
      frameiOS.current = ref;
    } else {
      frameMD.current = ref;
    }

    /**
     * If both frames are loaded, init the dark theme for the first page load.
     * When dark mode is toggled after the fact, that's handled by the
     * useEffect below.
     */
    if (frameiOS.current && frameMD.current) {
      postDarkThemeMessage();
    }
  };

  useEffect(() => {
    /**
     * Note that we can't just do useEffect(postDarkThemeMessage)
     * because useEffect callbacks cannot return a Promise, as
     * async functions do.
     */
    postDarkThemeMessage();
  }, [isDarkTheme]);

  /**
   * The source of the iframe takes a moment to
   * load, so a loading screen is shown by default.
   * Once the source of the iframe loads we can
   * hide the loading screen and show the inner content.
   *
   * We call this as a local function because useEffect
   * callbacks cannot return a Promise, as async functions do.
   */
  useEffect(() => {
    const setFramesLoaded = async () => {
      await Promise.all([waitForFrame(frameiOS.current), waitForFrame(frameMD.current)]);
      setIframesLoaded(true);
    };

    setFramesLoaded();
  }, [renderIframes]);

  useEffect(() => {
    /**
     * Using a dynamic import here to avoid SSR errors when trying to extend `HTMLElement`
     * to create the custom element.
     */
    import('./device-preview.js').then((comp) => comp.defineCustomElement());
  });

  /**
   * By default, we do not render the iframe content
   * as it could cause delays on page load. Instead
   * we wait for even 1 pixel of the playground to
   * scroll into view (intersect with the viewport)
   * before loading the iframes.
   */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const ev = entries[0];
        if (!ev.isIntersecting || renderIframes) return;

        setRenderIframes(true);

        /**
         * Once the playground is loaded, it is never "unloaded"
         * so we can safely disconnect the observer.
         */
        io.disconnect();
      },
      { threshold: 0 }
    );

    io.observe(hostRef.current!);
  });

  const isIOS = ionicMode === Mode.iOS;
  const isMD = ionicMode === Mode.MD;

  const sourceiOS = useBaseUrl(`${src}?ionic:mode=${Mode.iOS}`);
  const sourceMD = useBaseUrl(`${src}?ionic:mode=${Mode.MD}`);

  function copySourceCode() {
    if (hasUsageTargetOptions) {
      return;
    }
    const copyButton = codeRef.current.querySelector('button');
    copyButton.click();
  }

  const hasUsageTargetOptions = (code[usageTarget] as UsageTargetOptions)?.files !== undefined;
  /**
   * Reloads the iOS and MD iframe sources back to their original state.
   */
  function resetDemo() {
    if (frameiOS.current) {
      frameiOS.current.contentWindow.location.reload();
    }
    if (frameMD.current) {
      frameMD.current.contentWindow.location.reload();
    }
  }

  function openEditor(event) {
    const editorOptions: EditorOptions = {
      title,
      description,
      includeIonContent,
      mode: isIOS ? 'ios' : 'md',
      version,
    };

    let codeBlock;
    if (!hasUsageTargetOptions) {
      // codeSnippets are React components, so we need to get their rendered text
      // using outerText will preserve line breaks for formatting in Stackblitz editor
      codeBlock = codeRef.current.querySelector('code').outerText;
    } else {
      editorOptions.files = Object.keys(codeSnippets[usageTarget])
        .map((fileName) => ({
          [fileName]: hostRef.current!.querySelector<HTMLElement>(`#${getCodeSnippetId(usageTarget, fileName)} code`)
            .outerText,
        }))
        .reduce((acc, curr) => ({ ...acc, ...curr }), {});
    }

    switch (usageTarget) {
      case UsageTarget.Angular:
        openAngularEditor(codeBlock, editorOptions);
        break;
      case UsageTarget.JavaScript:
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

  useEffect(() => {
    const codeSnippets = {};
    Object.keys(code).forEach((key) => {
      if (typeof code[key] === 'function') {
        /**
         * Instantiates the React component from the MDX content for
         * single-file playground examples.
         */
        codeSnippets[key] = code[key]({});
      } else if (typeof code[key] === 'object') {
        /**
         * Instantiates the list of React components from the MDX content for
         * multi-file playground examples.
         */
        const fileSnippets = {};
        for (const fileName of Object.keys(code[key].files)) {
          fileSnippets[`${fileName}`] = code[key].files[fileName]({});
        }
        codeSnippets[key] = fileSnippets;
      }
    });
    setCodeSnippets(codeSnippets);
  }, []);

  function getCodeSnippetId(usageTarget: string, fileName: string) {
    let fileNameId = fileName;
    // replace all non-alphanumeric characters with underscores
    fileNameId = fileNameId.replace(/[^a-zA-Z0-9]/g, '_');
    return `playground_${usageTarget}_${fileNameId}`;
  }

  function getFileIcon(fileName: string) {
    const extension = fileName.slice(fileName.lastIndexOf('.') + 1);
    switch (extension) {
      case 'ts':
      case 'tsx':
        return <IconTs />;
      case 'html':
        return <IconHtml />;
      case 'vue':
        return <IconVue />;
      case 'css':
        return <IconCss />;
      default:
        return <IconDefault />;
    }
  }

  function renderCodeSnippets() {
    if (code[usageTarget]) {
      if (!hasUsageTargetOptions) {
        return codeSnippets[usageTarget];
      }
      if (codeSnippets[usageTarget] == null) {
        return null;
      }
      return (
        <PlaygroundTabs className="playground__tabs">
          {Object.keys(codeSnippets[usageTarget]).map((fileName) => (
            <TabItem
              className="playground__tab-item"
              value={fileName}
              label={fileName}
              key={fileName}
              {...{
                icon: getFileIcon(fileName),
              }}
            >
              <div id={getCodeSnippetId(usageTarget, fileName)}>{codeSnippets[usageTarget][fileName]}</div>
            </TabItem>
          ))}
        </PlaygroundTabs>
      );
    }
  }

  function renderLoadingScreen() {
    return (
      <div className="playground__loading">
        <IconDots />
      </div>
    );
  }

  const sortedUsageTargets = useMemo(() => Object.keys(UsageTarget).sort(), []);

  return (
    <div className="playground" ref={hostRef}>
      <div className="playground__container">
        <div className="playground__control-toolbar">
          <div className="playground__control-group">
            {sortedUsageTargets.map((lang) => {
              /**
               * If code was not passed for this target
               * then we should disable the button.
               */
              const langValue = UsageTarget[lang];
              const hasCode = code[langValue] !== undefined;
              return (
                <CodeBlockButton
                  key={`code-block-${lang}`}
                  language={lang}
                  usageTarget={usageTarget}
                  setUsageTarget={setUsageTarget}
                  disabled={!hasCode}
                />
              );
            })}
          </div>
          <div className="playground__control-group">
            <ControlButton
              disabled={mode && mode === 'md'}
              isSelected={isIOS}
              handleClick={() => setIonicMode(Mode.iOS)}
              title="iOS mode"
              label="iOS"
            />
            <ControlButton
              disabled={mode && mode === 'ios'}
              isSelected={isMD}
              handleClick={() => setIonicMode(Mode.MD)}
              title="MD mode"
              label="MD"
            />
          </div>
          <div className="playground__control-group playground__control-group--end">
            <Tippy theme="playground" arrow={false} placement="bottom" content="Open in StackBlitz">
              <button className="playground__icon-button playground__icon-button--primary" onClick={openEditor}>
                <svg
                  aria-hidden="true"
                  width="10"
                  height="14"
                  viewBox="0 0 10 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.53812 5.91743L7.52915 1L1 8.01835H4.42601L2.42601 13L9 5.91743H5.53812Z"
                    stroke="#73849A"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Tippy>
            <Tippy
              theme="playground"
              arrow={false}
              placement="bottom"
              content={
                hasUsageTargetOptions
                  ? 'For multi-file examples, use the copy buttons on the code blocks'
                  : 'Copy source code'
              }
            >
              <button
                className={`playground__icon-button playground__icon-button--primary ${
                  hasUsageTargetOptions ? 'playground__icon-button--disabled' : ''
                }`}
                aria-disabled={hasUsageTargetOptions}
                onClick={copySourceCode}
              >
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
                    stroke="current"
                  />
                  <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="current" />
                </svg>
              </button>
            </Tippy>
            <Tippy theme="playground" arrow={false} placement="bottom" content="Reset demo">
              <button className="playground__icon-button" onClick={resetDemo}>
                <svg
                  aria-hidden="true"
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.22215 2.96247C3.0444 2.42025 4.01109 2.13084 5 2.13084C5.63538 2.13084 6.08146 2.15202 6.39321 2.18615C6.68142 2.2177 6.92148 2.26571 7.08584 2.36392C7.17445 2.41686 7.31584 2.52988 7.35221 2.73039C7.38869 2.93151 7.29402 3.07964 7.24155 3.14415C7.18678 3.21149 7.126 3.25445 7.09468 3.275C7.07632 3.28704 7.06001 3.29656 7.04754 3.30345C7.0412 3.30696 7.03557 3.30995 7.03082 3.3124C7.02933 3.31317 7.02792 3.31389 7.0266 3.31456C7.0258 3.31496 7.02503 3.31535 7.02429 3.31572C7.02331 3.31621 7.02238 3.31667 7.0215 3.3171L7.02023 3.31773C7.01994 3.31787 7.01905 3.31831 6.81818 2.91589L7.01905 3.31831C6.79385 3.42779 6.52136 3.33637 6.41043 3.11412C6.40662 3.1065 6.40305 3.09881 6.39972 3.09108C6.36829 3.08669 6.33284 3.08224 6.29298 3.07787C6.02849 3.04892 5.61974 3.02804 5 3.02804C4.1909 3.02804 3.39996 3.26482 2.72721 3.70846C2.05447 4.15209 1.53013 4.78264 1.22049 5.52038C0.910864 6.25812 0.82985 7.0699 0.987699 7.85307C1.14555 8.63625 1.53517 9.35564 2.10729 9.92028C2.67942 10.4849 3.40835 10.8694 4.2019 11.0252C4.99546 11.181 5.81801 11.1011 6.56552 10.7955C7.31304 10.4899 7.95195 9.97241 8.40147 9.30847C8.85098 8.64452 9.09091 7.86394 9.09091 7.06542C9.09091 6.81767 9.29442 6.61682 9.54545 6.61682C9.79649 6.61682 10 6.81767 10 7.06542C10 8.04139 9.70675 8.99544 9.15735 9.80692C8.60794 10.6184 7.82705 11.2509 6.91342 11.6244C5.99979 11.9979 4.99445 12.0956 4.02455 11.9052C3.05464 11.7148 2.16373 11.2448 1.46447 10.5547C0.765206 9.86458 0.289002 8.98532 0.0960758 8.02811C-0.0968502 7.07089 0.00216639 6.07871 0.380605 5.17704C0.759043 4.27536 1.3999 3.50469 2.22215 2.96247Z"
                    fill="#73849A"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.67859 0.131391C4.8561 -0.0437971 5.1439 -0.0437971 5.32141 0.131391L7.59414 2.37438C7.77165 2.54957 7.77165 2.83361 7.59414 3.00879L5.32141 5.25178C5.1439 5.42697 4.8561 5.42697 4.67859 5.25178C4.50108 5.0766 4.50108 4.79256 4.67859 4.61737L6.6299 2.69159L4.67859 0.765805C4.50108 0.590616 4.50108 0.30658 4.67859 0.131391Z"
                    fill="#73849A"
                  />
                </svg>
              </button>
            </Tippy>
            <Tippy theme="playground" arrow={false} placement="bottom" content="Report an issue">
              <a
                className="playground__icon-button"
                href="https://github.com/ionic-team/ionic-docs/issues/new/choose"
                aria-label="Report an issue"
                target="_blank"
                rel="noreferrer"
              >
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 0C2.68661 0 0 2.75625 0 6.15268C0 8.87143 1.71964 11.175 4.10357 11.9893C4.14107 11.9973 4.17321 12 4.20536 12C4.42768 12 4.51339 11.8366 4.51339 11.6946C4.51339 11.5473 4.50804 11.1616 4.50536 10.6473C4.28036 10.6982 4.07946 10.7196 3.9 10.7196C2.74554 10.7196 2.48304 9.82232 2.48304 9.82232C2.20982 9.1125 1.81607 8.92232 1.81607 8.92232C1.29375 8.55536 1.81339 8.54464 1.85357 8.54464H1.85625C2.45893 8.59821 2.775 9.18214 2.775 9.18214C3.075 9.70714 3.47679 9.85446 3.83571 9.85446C4.11696 9.85446 4.37143 9.76339 4.52143 9.69375C4.575 9.29732 4.73036 9.02679 4.90179 8.87143C3.57054 8.71607 2.16964 8.18839 2.16964 5.83125C2.16964 5.15893 2.40268 4.60982 2.78571 4.18125C2.72411 4.02589 2.51786 3.39911 2.84464 2.55268C2.84464 2.55268 2.8875 2.53929 2.97857 2.53929C3.19554 2.53929 3.68571 2.62232 4.49464 3.18482C4.97411 3.04821 5.48571 2.98125 5.99732 2.97857C6.50625 2.98125 7.02054 3.04821 7.5 3.18482C8.30893 2.62232 8.79911 2.53929 9.01607 2.53929C9.10714 2.53929 9.15 2.55268 9.15 2.55268C9.47679 3.39911 9.27054 4.02589 9.20893 4.18125C9.59196 4.6125 9.825 5.16161 9.825 5.83125C9.825 8.19375 8.42143 8.71339 7.08482 8.86607C7.29911 9.05625 7.49196 9.43125 7.49196 10.0045C7.49196 10.8268 7.48393 11.4911 7.48393 11.692C7.48393 11.8366 7.56696 12 7.78929 12C7.82143 12 7.85893 11.9973 7.89643 11.9893C10.283 11.175 12 8.86875 12 6.15268C12 2.75625 9.31339 0 6 0Z"
                    fill="#73849A"
                  />
                </svg>
              </a>
            </Tippy>
          </div>
        </div>
        {renderIframes
          ? [
              <div className="playground__preview" key="preview">
                {!iframesLoaded && renderLoadingScreen()}
                {/*
                  We render two iframes, one for each mode.
                  When the set mode changes, we hide one frame and
                  show the other. This is done to avoid flickering
                  and doing unnecessary reloads when switching modes.
                */}
                {devicePreview
                  ? [
                      <div
                        key="ios-iframe"
                        className={!isIOS ? 'frame-hidden' : 'frame-visible'}
                        aria-hidden={!isIOS ? 'true' : null}
                      >
                        <device-preview mode="ios">
                          <iframe height={frameSize} ref={(ref) => handleFrameRef(ref, 'ios')} src={sourceiOS}></iframe>
                        </device-preview>
                      </div>,
                      <div
                        key="md-iframe"
                        className={!isMD ? 'frame-hidden' : 'frame-visible'}
                        aria-hidden={!isMD ? 'true' : null}
                      >
                        <device-preview mode="md">
                          <iframe height={frameSize} ref={(ref) => handleFrameRef(ref, 'md')} src={sourceMD}></iframe>
                        </device-preview>
                      </div>,
                    ]
                  : [
                      <iframe
                        key="ios-iframe"
                        height={frameSize}
                        className={!isIOS ? 'frame-hidden' : ''}
                        ref={(ref) => handleFrameRef(ref, 'ios')}
                        src={sourceiOS}
                        aria-hidden={!isIOS ? 'true' : null}
                      ></iframe>,
                      <iframe
                        key="md-iframe"
                        height={frameSize}
                        className={!isMD ? 'frame-hidden' : ''}
                        ref={(ref) => handleFrameRef(ref, 'md')}
                        src={sourceMD}
                        aria-hidden={!isMD ? 'true' : null}
                      ></iframe>,
                    ]}
              </div>,
            ]
          : []}
      </div>
      <div ref={codeRef} className="playground__code-block">
        {renderCodeSnippets()}
      </div>
    </div>
  );
}

const FRAME_SIZES = {
  xsmall: '100px',
  small: '200px',
  medium: '400px',
  large: '600px',
  xlarge: '800px',
};

const waitForFrame = (frame: HTMLIFrameElement) => {
  if (isFrameReady(frame)) return Promise.resolve();

  return new Promise<void>((resolve) => {
    if (frame) {
      frame.contentWindow.addEventListener('demoReady', () => {
        resolve();
      });
    }
  });
};

const isFrameReady = (frame: HTMLIFrameElement) => {
  if (!frame) {
    return false;
  }
  return (frame.contentWindow as any).demoReady === true;
};
