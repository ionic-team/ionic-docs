import clsx from 'clsx';
import React, { type ComponentProps, type ReactNode } from 'react';

import styles from './index.module.scss';

function CodeColor({ color, ...props }: ComponentProps<'span'> & { color?: string }): ReactNode {
  return (
    <span className={clsx(styles.codeColor, props.className, 'code-color')}>
      <span
        className={styles.codeColorBlock}
        style={{
          backgroundColor: color,
          ...props.style,
        }}
      />
      {props.children && <code className={styles.codeColorValue}>{props.children}</code>}
    </span>
  );
}

export default CodeColor;
