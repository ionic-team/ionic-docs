import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function PlaygroundTabItem({ children, hidden, className, value }): JSX.Element {
  return (
    <div role="tabpanel" className={clsx(styles.tabItem, className)} {...{ hidden }}>
      {children}
    </div>
  );
}
