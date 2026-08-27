import clsx from 'clsx';
import React from 'react';

import styles from './index.module.scss';

import { useColorMode } from '@docusaurus/theme-common';

export default function InputWrapper({ ...props }) {
  const { colorMode } = useColorMode();

  return (
    <div
      {...props}
      className={clsx(
        props.className,
        'input-wrapper',
        styles.inputWrapper,
        styles[`inputWrapper${colorMode === 'dark' ? 'Dark' : 'Light'}`]
      )}
    />
  );
}
