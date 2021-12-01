import clsx from 'clsx';
import React from 'react';

import styles from './index.module.scss';

export function NativeEnterpriseCards(props) {
  return (
    <div className={clsx(props.className, styles.nativeEnterpriseCards)}>
      <a href="https://capacitorjs.com/docs/plugins">
        <div className="image-wrapper">
          <img src="/docs/img/native/capacitor@2x.png" width="440" height="222" alt="capacitor logo"/>
        </div>
        <div className="heading-group">
          <header>Capacitor plugins</header>
          <p>A modern, open source native runtime built and maintained by the Ionic team and the Capacitor community. Our recommended native solution.</p>
        </div>
      </a>

      <a href="native/community">
        <div className="image-wrapper">
          <img src="/docs/img/native/cordova@2x.png" width="440" height="222" alt="cordova logo"/>
        </div>
        <div className="heading-group">
          <header>Cordova plugins</header>
          <p>A collection of free Cordova plugins, built and maintained by the community, with TypeScript wrappers and a consistent API and naming convention.</p>
        </div>
      </a>
    </div>
  );
}

export function NativeEnterprise(props) {
  return (
    <a className={clsx(props.className, styles.nativeEnterprise)} href="https://ionicframework.com/native">
      <div className="image-wrapper">
        <img src="/docs/img/native/native-enterprise@2x.png" width="476" height="228" />
      </div>
      
      <div className="heading-group">    
        <header>
          Ionic Native Enterprise Edition
        </header>
        <p>
          Premium, supported Capacitor and Cordova plugins, third-party integrations, and pre-built native solutions for building enterprise-grade apps.
        </p>
      </div>
    </a>
  )
}

