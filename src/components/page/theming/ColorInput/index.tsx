import React from 'react';
import clsx from 'clsx';
import InputWrapper from '../InputWrapper';

import { useColorMode } from '@docusaurus/theme-common';

import styles from './index.module.scss';

export default function ColorInput({ color, setColor, ...props }) {
  const { colorMode } = useColorMode();

  return (
    <div
      {...props}
      className={clsx(
        'color-input',
        styles.colorInput,
        props.className,
        styles[`colorInput${colorMode === 'dark' ? 'Dark' : 'Light'}`]
      )}
    >
      <div className={styles.colorPickerWrapper} style={{ '--background-c': color } as any}>
        <input
          type="color"
          onChange={({ target }) => setColor(target.value)}
          value={color}
          className={styles.colorPicker}
        />
      </div>
      <InputWrapper>
        <input onChange={({ target }) => setColor(target.value)} value={color} />
      </InputWrapper>
    </div>
  );
}
