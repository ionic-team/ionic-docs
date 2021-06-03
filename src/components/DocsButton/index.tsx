import clsx from 'clsx';
import React from 'react';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

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
    <Link href={href} {...props}>
      {props.children}
    </Link>
  ) : (
    <button {...props}>{props.children}</button>
  );
}
