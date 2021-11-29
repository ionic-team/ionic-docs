import clsx from 'clsx';
import React from 'react';
import styles from './index.module.scss';

export default function AngularPage(props) {
  return <div {...props} className={clsx(styles.pageAngular, props.className)} />;
}
