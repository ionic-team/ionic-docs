import React from 'react';
import clsx from 'clsx';

import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

import styles from './styles.module.scss';

export default function EncapsulationPill({ type, ...props }) {
  const toUrl = useBaseUrl(`reference/glossary#${type}`);

  return (
    <Link to={toUrl} {...props} className={clsx(props.className, 'encapsulation-pill', styles.encapsulationPill)}>
      {type}
    </Link>
  );
}
