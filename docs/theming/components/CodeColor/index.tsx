import clsx from 'clsx';
import React from 'react';

import styles from './code-color.module.css';

function CodeColor(props): JSX.Element {
  return (
    <div className={clsx(styles.codeColor, props.className)}>
      <span
        className={styles.codeColorBlock}
        style={{
          backgroundColor: props.value,
        }}
      />
      {props.children && <code className={styles.codeColorValue}>{props.children}</code>}
    </div>
  );
}

export default CodeColor;
