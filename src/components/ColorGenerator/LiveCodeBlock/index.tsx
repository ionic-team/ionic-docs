import * as React from 'react';
import { LiveProvider, LiveEditor } from 'react-live';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import usePrismTheme from '@theme/hooks/usePrismTheme';
import styles from './styles.module.css';

export default function LiveCodeBlock({ children, transformCode, ...props }) {
  const { isClient } = useDocusaurusContext();
  const prismTheme = usePrismTheme();

  return (
    <div className={styles.playgroundContainer}>
      <LiveProvider
        key={isClient}
        code={isClient ? children.replace(/\n$/, '') : ''}
        transformCode={transformCode || (code => `${code};`)}
        theme={prismTheme}
        {...props}
      >
        <LiveEditor
          {...props}
          className={clsx({
            [styles.playgroundEditor]: true,
            [props.className]: Boolean(props.className),
          })}
        />
      </LiveProvider>
    </div>
  );
}
