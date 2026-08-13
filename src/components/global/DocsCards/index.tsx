import React, { type ReactNode } from 'react';

import './cards.css';

function DocsCards(props): ReactNode {
  return <docs-cards class={props.className}>{props.children}</docs-cards>;
}

export default DocsCards;
