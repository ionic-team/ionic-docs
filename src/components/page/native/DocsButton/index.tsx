import clsx from 'clsx';
import React, { type HTMLAttributes } from 'react';

import styles from './styles.module.css';

export default function DocsButton({
  href,
  round = false,
  ...props
}: HTMLAttributes<HTMLElement> & { href?: string; round?: boolean }) {
  // const isInternal = /^\/docs/.test(href);

  props.className = clsx(props.className, {
    [styles.docsButton]: true,
    'docs-button': true,
    [styles.docsButtonRound]: round,
    'docs-button--round': round,
  });

  return href ? (
    <a href={href} className="docsButton" {...props}>
      {props.children}
    </a>
  ) : (
    <button className="docsButton" {...props}>
      {props.children}
    </button>
  );
}
