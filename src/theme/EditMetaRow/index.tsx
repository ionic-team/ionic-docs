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

import React, {type ReactNode} from 'react';
import clsx from 'clsx';
// CUSTOM CODE
import CopyPageButton from 'docusaurus-plugin-copy-page-button/react';
import {useMarkdownTwin} from '@site/src/utils/markdown-twin';
// CUSTOM CODE END
import EditThisPage from '@theme/EditThisPage';
import type {Props} from '@theme/EditMetaRow';

import LastUpdated from '@theme/LastUpdated';

import globalStyles from '@docusaurus/theme-classic/lib/theme/EditMetaRow/styles.module.css';
import styles from './styles.module.css';

export default function EditMetaRow({
  className,
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy,
}: Props): ReactNode {
  // CUSTOM CODE - point the copy button at the page's markdown twin
  const twinUrl = useMarkdownTwin();
  const markdownUrl = (pageUrl: string) => {
    try {
      const path = twinUrl(new URL(pageUrl).pathname);
      // Resolve against the page being browsed so a preview deploy links its
      // own markdown rather than production's.
      return path ? new URL(path, pageUrl).toString() : pageUrl;
    } catch {
      return pageUrl;
    }
  };
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
