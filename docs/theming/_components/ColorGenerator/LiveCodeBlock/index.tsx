import React, { useState, useRef } from 'react';
import { LiveProvider, LiveEditor } from 'react-live';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import usePrismTheme from '@theme/hooks/usePrismTheme';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import copy from 'copy-text-to-clipboard';

export default function LiveCodeBlock({ children, transformCode, ...props }) {
  const { isClient } = useDocusaurusContext();
  const prismTheme = usePrismTheme();
  const [showCopied, setShowCopied] = useState(false);

  const button = useRef(null);

  const content = Array.isArray(children) ? children.join('') : children;

  let code = content.replace(/\n$/, '');

  const handleCopyCode = () => {
    copy(code);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

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
        <button
          ref={button}
          type="button"
          aria-label={translate({
            id: 'theme.CodeBlock.copyButtonAriaLabel',
            message: 'Copy code to clipboard',
            description: 'The ARIA label for copy code blocks button',
          })}
          className={clsx(styles.copyButton)}
          onClick={handleCopyCode}
        >
          {showCopied ? (
            <Translate
              id="theme.CodeBlock.copied"
              description="The copied button label on code blocks"
            >
              Copied
            </Translate>
          ) : (
            <Translate
              id="theme.CodeBlock.copy"
              description="The copy button label on code blocks"
            >
              Copy
            </Translate>
          )}
        </button>
      </LiveProvider>
    </div>
  );
}
