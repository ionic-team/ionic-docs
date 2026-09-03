import clsx from 'clsx';
import React, { type HTMLAttributes } from 'react';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

export default function DocsButton({
  href,
  round = false,
  ...props
}: HTMLAttributes<HTMLElement> & { href?: string; round?: boolean }) {
  props.className = clsx(props.className, {
    [styles.docsButton]: true,
    'docs-button': true,
    [styles.docsButtonRound]: round,
    'docs-button--round': round,
  });

  return href ? (
    <Link to={href} className="docsButton" {...props}>
      {props.children}
    </Link>
  ) : (
    <button className="docsButton" {...props}>
      {props.children}
    </button>
  );
}
