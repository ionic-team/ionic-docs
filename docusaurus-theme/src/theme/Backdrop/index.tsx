import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

export default function Backdrop({ visible = false, ...props }) {
  return (
    <div
      role="presentation"
      {...props}
      className={clsx(props.className, 'backdrop', styles.backdrop, {
        'backdrop--visible': visible,
        [styles.backdropVisible]: visible,
      })}
    />
  );
}
