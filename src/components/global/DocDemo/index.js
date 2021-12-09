import React, { useEffect, useState, useRef, useCallback } from 'react';
import clsx from 'clsx';

import './demo.css';

const DocDemo = (props) => {
  const [ionicMode, setIonicMode] = useState('ios');

  const iframe = useRef(null);
  const iframeLoaded = useRef(false);
  const messageQueue = useRef([]);
  const newestMessage = useRef(null);

  useEffect(() => {
    window.addEventListener('demoMessage', handleMessage);

    () => window.removeEventListener('demoMessage', handleMessage);
  }, []);

  const handleMessage = useCallback(async (msg) => {
    iframeLoaded.current ? postMessage(msg) : messageQueue.current.push(msg);
  }, []);

  const postMessage = (msg) => {
    newestMessage.current = msg;
    try {
      if (iframe.current && iframe.current.contentWindow) {
        iframe.current.contentWindow.postMessage(msg.detail, '*');
      }
    } catch (e) {
      // ignore
    }
  };

  const onIframeLoad = () => {
    messageQueue.current.forEach((msg) => postMessage(msg));
    postMessage(newestMessage.current);
    messageQueue.current = [];
    iframeLoaded.current = true;
  };

  const modeToggle = (
    <div className="docs-demo-mode-toggle">
      {['ios', 'md'].map((mode) => (
        <button
          className={clsx({
            'is-selected': mode === ionicMode,
          })}
          title={`Toggle ${mode === 'ios' ? 'iOS' : 'Android'} mode`}
          onClick={() => setIonicMode(mode)}
        >
          {mode === 'ios' ? 'iOS' : 'Android'}
        </button>
      ))}
    </div>
  );

  const sourceLink = (
    <a href={props.source} className="docs-demo-source" target="_blank" title="Demo Source">
      {/* <ion-icon name="open" /> */} View Source
    </a>
  );

  const device = (
    <div className={`docs-demo-device ${ionicMode}`}>
      <figure>
        <svg className="docs-demo-device__md-bar" viewBox="0 0 1384.3 40.3">
          <path
            className="st0"
            d="M1343 5l18.8 32.3c.8 1.3 2.7 1.3 3.5 0L1384 5c.8-1.3-.2-3-1.7-3h-37.6c-1.5 0-2.5 1.7-1.7 3z"
          />
          <circle className="st0" cx="1299" cy="20.2" r="20" />
          <path
            className="st0"
            d="M1213 1.2h30c2.2 0 4 1.8 4 4v30c0 2.2-1.8 4-4 4h-30c-2.2 0-4-1.8-4-4v-30c0-2.3 1.8-4 4-4zM16 4.2h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
          />
        </svg>
        <svg className="docs-demo-device__ios-notch" viewBox="0 0 219 31">
          <path
            d="M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z"
            fill-rule="evenodd"
          />
        </svg>
        <iframe
          loading="lazy"
          importance="low"
          onLoad={onIframeLoad}
          src={`${props.url}?ionic:mode=${ionicMode}`}
          ref={iframe}
        />
      </figure>
    </div>
  );

  return (
    <div className="doc-demo">
      {modeToggle}
      {device}
      {props.source && sourceLink}
    </div>
  );
};

export default DocDemo;
