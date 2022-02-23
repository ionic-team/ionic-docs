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
