import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import React from 'react';

import styles from './index.module.scss';

export default function NativeEnterpriseCard(props) {
  return (
    <a className={clsx(props.className, styles.nativeEnterprise)} href="https://ionic.io/enterprise-sdk" target="_blank">
      <div className="image-wrapper">
        <img src={useBaseUrl('/img/native/native-enterprise@2x.png')} width="476" height="228" />
      </div>

      <div className="heading-group">
        <header>Ionic Enterprise SDK</header>
        <p>
          Premium, supported plugins, third-party integrations, and pre-built native solutions for
          building enterprise-grade apps.
        </p>
      </div>
    </a>
  );
}
