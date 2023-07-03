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
  const {frontMatter, toc, demoUrl} = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  // CUSTOM CODE
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

export default function DocItemLayout({children}: Props): JSX.Element {
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
        {/* ------- CUSTOM CODE -------- */}
        <div className="spacer"></div>
        
        {demoUrl && (
          <div
            className={clsx(
              'doc-demo-wrapper'
            )}
          >
            <DocDemo url={demoUrl} source={demoSourceUrl} />
          </div>
        )}
        {/* ------- CUSTOM CODE END -------- */}
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}
