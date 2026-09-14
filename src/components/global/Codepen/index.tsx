import React, { type ReactNode } from 'react';

import { useScript } from '@site/src/utils/hooks';

function CodePen(props: {
  height?: number | string;
  theme?: string;
  defaultTab?: string;
  user?: string;
  slug?: string;
  preview?: boolean;
  penTitle?: string;
}): ReactNode {
  useScript('https://static.codepen.io/assets/embed/ei.js');
  return (
    <div
      className="codepen"
      data-height={props.height}
      data-theme-id={props.theme}
      data-default-tab={props.defaultTab}
      data-user={props.user}
      data-slug-hash={props.slug}
      data-preview={props.preview ? 'true' : 'false'}
      data-pen-title={props.penTitle}
      no-prerender="true"
    ></div>
  );
}

export default CodePen;
