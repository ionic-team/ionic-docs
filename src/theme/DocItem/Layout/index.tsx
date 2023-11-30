/**
 * Original source:
 * @link https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-theme-classic/src/theme/DocItem/Layout/index.tsx
 * 
 * Reason for overriding:
 * - Add a phone demo to the right of the page, e.g. /docs
 */

import React from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import type {Props} from '@theme/DocItem/Layout';
import styles from '@docusaurus/theme-classic/lib/theme/DocItem/Layout/styles.module.css';

// CUSTOM CODE
import DocDemo from '@components/global/DocDemo';
// CUSTOM CODE END

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const {frontMatter, toc} = useDoc();
  const windowSize = useWindowSize();

  const hidden = frontMatter.hide_table_of_contents;
  // CUSTOM CODE
  const demoUrl = frontMatter.demoUrl;
  const canRender = !hidden && toc.length > 0 && !demoUrl;
  // CUSTOM CODE END

  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;

  return {
    hidden,
    mobile,
    desktop,
  };
}

// CUSTOM CODE
function useDocDemo() {
  const {frontMatter} = useDoc();
  const demoUrl = frontMatter.demoUrl;
  const demoSourceUrl = frontMatter.demoSourceUrl;
  return {
    demoUrl,
    demoSourceUrl,
  };
}
// CUSTOM CODE END

export default function DocItemLayout({children, ...props}: Props): JSX.Element {
  const docTOC = useDocTOC();
  // CUSTOM CODE
  const {demoUrl, demoSourceUrl} = useDocDemo();
  // CUSTOM CODE END
  return (
    <div className="row">
      <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>
      {/* ------- CUSTOM CODE -------- */}
      {/* Ideally this would only render if there is a demoUrl and the it's a mobile device. However,the `windowSize` does not provide a tablet so we have to hide it through CSS. */}
      {demoUrl && (
        <div className='col col--4'>
          <div className='doc-demo-wrapper'>
            <DocDemo url={demoUrl} source={demoSourceUrl} />
          </div>
        </div>
      )}
      {/* ------- CUSTOM CODE END -------- */}
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}
