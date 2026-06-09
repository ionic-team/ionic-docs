/**
 * DocItemFooter renders the footer of a doc page — the tags row and the
 * edit-meta row ("Edit this page" + last updated).
 *
 * Original source:
 * @link https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-theme-classic/src/theme/DocItem/Footer/index.tsx
 *
 * Reason for overriding:
 * - Render the "Copy page" button (docusaurus-plugin-copy-page-button) inline
 *   with the "Edit this page" link, styled as a peer link rather than a
 *   standalone button. Always show the edit-meta row so it appears on every
 *   doc page, not only pages that have edit/last-updated metadata.
 */

import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import TagsListInline from '@theme/TagsListInline';
import EditThisPage from '@theme/EditThisPage';
import LastUpdated from '@theme/LastUpdated';

// CUSTOM CODE
import CopyPageButton from 'docusaurus-plugin-copy-page-button/react';
import styles from './styles.module.css';
// CUSTOM CODE END

export default function DocItemFooter(): JSX.Element | null {
  const {metadata} = useDoc();
  const {editUrl, lastUpdatedAt, lastUpdatedBy, tags} = metadata;

  const canDisplayTagsRow = tags.length > 0;
  // CUSTOM CODE
  // Always render the edit-meta row so the "Copy page" button shows on every
  // doc page, even ones without an edit URL or last-updated metadata.
  const canDisplayEditMetaRow = true;
  // CUSTOM CODE END
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;

  if (!canDisplayFooter) {
    return null;
  }

  return (
    <footer
      className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
      {canDisplayTagsRow && (
        <div
          className={clsx(
            'row margin-top--sm',
            ThemeClassNames.docs.docFooterTagsRow,
          )}>
          <div className="col">
            <TagsListInline tags={tags} />
          </div>
        </div>
      )}
      {canDisplayEditMetaRow && (
        <div
          className={clsx(
            'row margin-top--sm',
            ThemeClassNames.docs.docFooterEditMetaRow,
          )}>
          <div className="col">
            {/* CUSTOM CODE — "Edit this page | Copy page" as peer links on one row */}
            <div className={styles.editMetaActions}>
              {editUrl && <EditThisPage editUrl={editUrl} />}
              <CopyPageButton
                customStyles={{
                  container: {className: styles.copyPageContainer},
                  button: {className: styles.copyPageButton},
                }}
              />
            </div>
            {/* CUSTOM CODE END */}
          </div>
          <div className={clsx('col', styles.lastUpdatedCol)}>
            {(lastUpdatedAt || lastUpdatedBy) && (
              <LastUpdated
                lastUpdatedAt={lastUpdatedAt}
                lastUpdatedBy={lastUpdatedBy}
              />
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
