import React, { useState } from 'react';

import './playground.css';

enum Mode {
  iOS = 'ios',
  MD = 'md',
}

export default function Playground() {
  const [mode, setMode] = useState(Mode.iOS);

  const isIOS = mode === Mode.iOS;
  const isMD = mode === Mode.MD;

  // TODO FW-741: Load code snippets remotely

  return (
    <div className="playground">
      <div className="playground__container">
        <div className="playground__control-toolbar">
          {/* TODO FW-742: Code language switcher */}
          <div className="playground__control-group">
            <button
              type="button"
              className={'playground__control-button ' + (isIOS ? 'playground__control-button--selected' : '')}
              onClick={() => setMode(Mode.iOS)}
            >
              iOS
            </button>
            <button
              type="button"
              className={'playground__control-button ' + (isMD ? 'playground__control-button--selected' : '')}
              onClick={() => setMode(Mode.MD)}
            >
              MD
            </button>
          </div>
          <div className="playground__control-group playground__control-group--end">
            {/* TODO FW-737: Toggle/Collapse Button */}
            {/* TODO FW-738: Report an Issue Button */}
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
            {/* TODO FW-739: Copy Source Code Button */}
            {/* TODO FW-740: Open Stackblitz Button */}
          </div>
        </div>
        <div className="playground__preview">{/* TODO FW-743: iframe Preview */}</div>
      </div>
      <div className="playground__code-block">{/* TODO FW-744: Code blocks per language */}</div>
    </div>
  );
}
