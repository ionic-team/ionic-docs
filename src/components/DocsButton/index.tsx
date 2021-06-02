import clsx from 'clsx';
import React from 'react';

import styles from './DocsButton.module.css';

export default function DocsButton({ href, round = false, ...props }) {
  // const isInternal = /^\/docs/.test(href);

  props.className = clsx({
    [props.className]: Boolean(props.className),
    [styles.docsButton]: true,
    'docs-button': true,
    [styles.docsButtonRound]: round,
    'docs-button--round': round,
  });

  return href ? (
    <a href={href} {...props}>
      {props.children}
    </a>
  ) : (
    <button {...props}>{props.children}</button>
  );
}
