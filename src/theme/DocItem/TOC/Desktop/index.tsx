/**
 * Wraps the original DocItem/TOC/Desktop to render the page-level
 * copy/AI dropdown above the "Contents" heading in the right sidebar.
 */

import React from 'react';
import CopyPageButton from 'docusaurus-plugin-copy-page-button/react';
import TOCDesktop from '@theme-original/DocItem/TOC/Desktop';

import styles from './styles.module.css';

export default function TOCDesktopWrapper(): JSX.Element {
  return (
    <>
      <div className={styles.copyPageAction}>
        <CopyPageButton
          customStyles={{
            container: { className: styles.copyPageContainer },
            button: { className: styles.copyPageButton },
            dropdown: { className: styles.copyPageDropdown },
          }}
        />
      </div>
      <TOCDesktop />
    </>
  );
}
