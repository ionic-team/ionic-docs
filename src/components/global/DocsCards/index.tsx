import React, { type ReactNode } from 'react';

import './cards.css';

function DocsCards(props: { className?: string; children?: ReactNode }): ReactNode {
  return <docs-cards class={props.className}>{props.children}</docs-cards>;
}

export default DocsCards;
