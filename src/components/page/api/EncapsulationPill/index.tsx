import React from 'react';
import clsx from 'clsx';

import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

import styles from './styles.module.scss';

// The llms-txt plugin finds the pill by this plain class, so keep it.
const PILL_CLASS = 'encapsulation-pill';

export default function EncapsulationPill({ type, ...props }: { type: string; className?: string }) {
  const toUrl = useBaseUrl(`reference/glossary#${type}`);

  return (
    <Link to={toUrl} {...props} className={clsx(props.className, PILL_CLASS, styles.encapsulationPill)}>
      {type}
    </Link>
  );
}
