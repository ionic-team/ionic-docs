import clsx from 'clsx';
import React, { type ComponentProps } from 'react';
import styles from './index.module.scss';

export default function PageStyles(props: ComponentProps<'div'>) {
  return <div {...props} className={clsx(styles.pageReact, props.className)} />;
}
