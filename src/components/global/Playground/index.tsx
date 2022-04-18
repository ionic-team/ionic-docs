import React, { useEffect, useRef, useState } from 'react';

import './playground.css';
import { EditorOptions, openAngularEditor, openHtmlEditor, openReactEditor, openVueEditor } from './stackblitz.utils';
import { Mode, UsageTarget } from './playground.types';
import useThemeContext from '@theme/hooks/useThemeContext';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const ControlButton = ({ isSelected, handleClick, title, label }) => {
  return (
    <button
      type="button"
      title={title}
      className={`playground__control-button ${isSelected ? 'playground__control-button--selected' : ''}`}
      onClick={handleClick}
      data-text={label}
    >
      {label}
    </button>
  );
};

const CodeBlockButton = ({ language, usageTarget, setUsageTarget, setCodeExpanded }) => {
  const langValue = UsageTarget[language];
  return (
    <ControlButton
      isSelected={usageTarget === langValue}
      handleClick={() => {
        setCodeExpanded(true);
        setUsageTarget(langValue);
      }}
      title={`Show ${language} code`}
      label={language}
    />
  );
};

/**
 * @param code The code snippets for each supported framework target.
 * @param title Optional title of the generated playground example. Specify to customize the Stackblitz title.
 * @param description Optional description of the generated playground example. Specify to customize the Stackblitz description.
 */
export default function Playground({
  code,
  title,
  description,
  source,
  size = 'small',
}: {
  code: { [key in UsageTarget]?: () => {} };
  title?: string;
  description?: string;
}) {
  if (!code || Object.keys(code).length === 0) {
    console.warn('No code usage examples provided for this Playground example.');
    return;
  }
  const { isDarkTheme } = useThemeContext();

  const codeRef = useRef(null);
  const frameiOS = useRef(null);
  const frameMD = useRef(null);

  /**
   * Developers can set a predefined size
   * or an explicit pixel value.
   */
  const frameSize = FRAME_SIZES[size] || size;
  const [usageTarget, setUsageTarget] = useState(UsageTarget.JavaScript);
  const [mode, setMode] = useState(Mode.iOS);
  const [codeExpanded, setCodeExpanded] = useState(false);
  const [codeSnippets, setCodeSnippets] = useState({});

  /**
   * Rather than encode isDarkTheme into the frame source
   * url, we post a message to each frame so that
   * dark mode can be enabled without a full page reload.
   */
  useEffect(async () => {
    if (frameiOS.current && frameMD.current) {
      await Promise.all([waitForFrame(frameiOS.current), waitForFrame(frameMD.current)]);

      const message = { darkMode: isDarkTheme };
      frameiOS.current.contentWindow.postMessage(message);
      frameMD.current.contentWindow.postMessage(message);
    }
  }, [isDarkTheme]);

  const isIOS = mode === Mode.iOS;
  const isMD = mode === Mode.MD;

  const sourceiOS = `${source}?ionic:mode=${Mode.iOS}`;
  const sourceMD = `${source}?ionic:mode=${Mode.MD}`;

  function copySourceCode() {
    const copyButton = codeRef.current.querySelector('button');
    copyButton.click();
  }

  function openEditor(event) {
    // codeSnippets are React components, so we need to get their rendered text
    // using outerText will preserve line breaks for formatting in Stackblitz editor
    const codeBlock = codeRef.current.querySelector('code').outerText;
    const editorOptions: EditorOptions = {
      title,
      description,
    };

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
      // Instantiates the React component from the MDX content.
      codeSnippets[key] = code[key]({});
    });
    setCodeSnippets(codeSnippets);
  }, []);

  return (
    <div className="playground">
      <div className="playground__container">
        <div className="playground__control-toolbar">
          <div className="playground__control-group">
            {Object.keys(UsageTarget).map((lang) => (
              <CodeBlockButton
                key={`code-block-${lang}`}
                language={lang}
                usageTarget={usageTarget}
                setUsageTarget={setUsageTarget}
                setCodeExpanded={setCodeExpanded}
              />
            ))}
          </div>
          <div className="playground__control-group">
            <ControlButton isSelected={isIOS} handleClick={() => setMode(Mode.iOS)} title="iOS mode" label="iOS" />
            <ControlButton isSelected={isMD} handleClick={() => setMode(Mode.MD)} title="MD mode" label="MD" />
          </div>
          <div className="playground__control-group playground__control-group--end">
            <Tippy
              theme="playground"
              arrow={false}
              placement="bottom"
              content={codeExpanded ? 'Hide source code' : 'Show full source'}
            >
              <button
                className="playground__icon-button playground__icon-button--primary"
                aria-label={codeExpanded ? 'Hide source code' : 'Show full source'}
                onClick={() => setCodeExpanded(!codeExpanded)}
              >
                <svg
                  width="16"
                  height="10"
                  aria-hidden="true"
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 9L1 5L5 1" stroke="current" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11 9L15 5L11 1" stroke="current" strokeLinecap="round" strokeLinejoin="round" />
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
            <Tippy theme="playground" arrow={false} placement="bottom" content="Copy source code">
              <button className="playground__icon-button playground__icon-button--primary" onClick={copySourceCode}>
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
            <Tippy theme="playground" arrow={false} placement="bottom" content="Open in StackBlitz">
              <button className="playground__icon-button playground__icon-button--primary" onClick={openEditor}>
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Tippy>
          </div>
        </div>
        <div className="playground__preview">
          {/*
            We render two iframes, one for each mode.
            When the set mode changes, we hide one frame and
            show the other. This is done to avoid flickering
            and doing unnecessary reloads when switching modes.
          */}
          <iframe height={frameSize} className={!isIOS ? 'frame-hidden' : ''} ref={frameiOS} src={sourceiOS}></iframe>
          <iframe height={frameSize} className={!isMD ? 'frame-hidden' : ''} ref={frameMD} src={sourceMD}></iframe>
        </div>
      </div>
      <div
        ref={codeRef}
        className={'playground__code-block ' + (codeExpanded ? 'playground__code-block--expanded' : '')}
        aria-expanded={codeExpanded ? 'true' : 'false'}
      >
        {codeSnippets[usageTarget]}
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

const waitForFrame = (frame: HTMLElement) => {
  if (isFrameReady(frame)) return Promise.resolve();

  return new Promise((resolve) => {
    frame.contentWindow.addEventListener('demoReady', () => {
      resolve();
    });
  });
};

const isFrameReady = (frame: HTMLElement) => {
  return frame.contentWindow.demoReady === true;
};
