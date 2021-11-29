import clsx from 'clsx';
import React from 'react';

import styles from './index.module.scss';

export function AppWizard(props) {
  return <div {...props} className={clsx(props.className, styles.ionicWizard)} />;
}
