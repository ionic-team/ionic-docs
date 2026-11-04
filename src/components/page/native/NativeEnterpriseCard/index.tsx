import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import React, { type ComponentProps } from 'react';

import styles from './index.module.scss';

export default function NativeEnterpriseCard(props: ComponentProps<'a'>) {
  return (
    <Link className={clsx(props.className, styles.nativeEnterprise)} to="https://ionic.io/enterprise-sdk">
      <div className="image-wrapper">
        <img src={useBaseUrl('/img/native/native-enterprise@2x.png')} width="476" height="228" />
      </div>

      <div className="heading-group">
        <header>Ionic Enterprise SDK</header>
        <p>
          Premium, supported plugins, third-party integrations, and pre-built native solutions for building
          enterprise-grade apps.
        </p>
      </div>
    </Link>
  );
}
