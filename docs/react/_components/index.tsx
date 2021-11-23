import clsx from 'clsx';
import React from 'react';
import styles from './index.module.scss';

export default function ReactPage(props) {
  return <div {...props} className={clsx(styles.pageReact, props.className)} />
}