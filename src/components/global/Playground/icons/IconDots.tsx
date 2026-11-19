import React from 'react';

import styles from './IconDots.module.css';

export const IconDots = () => (
  <div className={styles.dots}>
    <svg viewBox="0 0 64 64">
      <circle transform="translate(32,32)" r="6"></circle>
    </svg>
    <svg viewBox="0 0 64 64">
      <circle transform="translate(32,32)" r="6"></circle>
    </svg>
    <svg viewBox="0 0 64 64">
      <circle transform="translate(32,32)" r="6"></circle>
    </svg>
  </div>
);
