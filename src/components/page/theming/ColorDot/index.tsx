import clsx from 'clsx';
import React, { type ComponentProps } from 'react';

import { useColorMode } from '@docusaurus/theme-common';

import styles from './index.module.scss';

export default function ColorDot({ color, ...props }: ComponentProps<'div'> & { color?: string }) {
  const { colorMode } = useColorMode();

  return (
    <div
      style={{ backgroundColor: color }}
      className={clsx(
        props.className,
        'color-dot',
        styles.colorDot,
        styles[`colorDot${colorMode === 'dark' ? 'Dark' : 'Light'}`]
      )}
      {...props}
    />
  );
}
