/**
 * EditMetaRow is a component that renders the edit and last updated
 * metadata for a page. This component is displayed at the bottom of
 * each page.
 *
 * Original source:
 * @link https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-theme-classic/src/theme/EditMetaRow/index.tsx
 *
 * Reason for overriding:
 * - Add a copy page button next to the edit this page link
 * - Wrap the whole last updated section in a conditional, not just
 * its contents. Otherwise the empty column still reserves half the
 * row.
 */

import React, {type ReactNode, useMemo} from 'react';
import clsx from 'clsx';
// CUSTOM CODE
import CopyPageButton from 'docusaurus-plugin-copy-page-button/react';
import {useAllDocsData} from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {toMarkdownPath} from '@site/plugins/docusaurus-plugin-llms-txt/lib/markdown-path';
// CUSTOM CODE END
import EditThisPage from '@theme/EditThisPage';
import type {Props} from '@theme/EditMetaRow';

import LastUpdated from '@theme/LastUpdated';

import globalStyles from '@docusaurus/theme-classic/lib/theme/EditMetaRow/styles.module.css';
import styles from './styles.module.css';

// CUSTOM CODE - point the copy button's AI actions at the markdown twin
const withoutTrailingSlash = (pathname: string) => pathname.replace(/\/+$/, '') || '/';

/**
 * Hands the copy button a page's markdown twin instead of the HTML page.
 *
 * Only sidebar-reachable pages get a twin, and only in the default locale, so
 * anything else keeps its HTML URL. A doc's global data already carries
 * `sidebar` when it is reachable, so nothing extra ships to the client.
 */
function useMarkdownUrl(): (pageUrl: string) => string {
  const allDocsData = useAllDocsData();
  const {
    siteConfig: {baseUrl},
    i18n: {currentLocale, defaultLocale},
  } = useDocusaurusContext();

  const twinnable = useMemo(() => {
    const paths = new Map<string, string>();
    Object.values(allDocsData).forEach((plugin) =>
      plugin.versions.forEach((version) =>
        version.docs.forEach((doc) => {
          if (doc.sidebar) {
            paths.set(withoutTrailingSlash(doc.path), doc.path);
          }
        })
      )
    );
    return paths;
  }, [allDocsData]);

  return (pageUrl: string) => {
    if (currentLocale !== defaultLocale) {
      return pageUrl;
    }

    try {
      const url = new URL(pageUrl);
      // The home page answers on both `/docs` and `/docs/` and only the second
      // maps to `index.md`, so go by the doc's permalink, not the address bar.
      const permalink = twinnable.get(withoutTrailingSlash(url.pathname));
      if (!permalink) {
        return pageUrl;
      }

      url.hash = '';
      url.search = '';
      url.pathname = `${baseUrl}${toMarkdownPath(permalink, baseUrl)}`;
      return url.toString();
    } catch {
      return pageUrl;
    }
  };
}
// CUSTOM CODE END

export default function EditMetaRow({
  className,
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy,
}: Props): ReactNode {
  // CUSTOM CODE
  const markdownUrl = useMarkdownUrl();
  // CUSTOM CODE END
  return (
    <div className={clsx('row', className)}>
      {/* CUSTOM CODE — "Edit this page | Copy page" as peer links on one row */}
      <div
        className={clsx('col', globalStyles.noPrint, styles.editMetaActions)}>
        {editUrl && <EditThisPage editUrl={editUrl} />}
        <CopyPageButton
          markdownUrl={markdownUrl}
          customStyles={{
            container: {className: styles.copyPageContainer},
            button: {className: styles.copyPageButton},
          }}
        />
      </div>
      {/* CUSTOM CODE END */}
      {/* CUSTOM CODE — wrap the whole column in the conditional, not just its contents */}
      {(lastUpdatedAt || lastUpdatedBy) && (
        <div className={clsx('col', globalStyles.lastUpdated)}>
          <LastUpdated
            lastUpdatedAt={lastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
          />
        </div>
      )}
      {/* CUSTOM CODE END */}
    </div>
  );
}
