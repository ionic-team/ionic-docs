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

import React, { type ReactNode } from 'react';
import clsx from 'clsx';
// CUSTOM CODE
import CopyPageButton from 'docusaurus-plugin-copy-page-button/react';
// CUSTOM CODE END
import EditThisPage from '@theme/EditThisPage';
import type { Props } from '@theme/EditMetaRow';

import LastUpdated from '@theme/LastUpdated';

import globalStyles from '@docusaurus/theme-classic/lib/theme/EditMetaRow/styles.module.css';
import styles from './styles.module.css';

export default function EditMetaRow({ className, editUrl, lastUpdatedAt, lastUpdatedBy }: Props): ReactNode {
  return (
    <div className={clsx('row', className)}>
      {/* CUSTOM CODE — "Edit this page | Copy page" as peer links on one row */}
      <div className={clsx('col', styles.editMetaActions)}>
        {editUrl && <EditThisPage editUrl={editUrl} />}
        <CopyPageButton
          customStyles={{
            container: { className: styles.copyPageContainer },
            button: { className: styles.copyPageButton },
          }}
        />
      </div>
      {/* CUSTOM CODE END */}
      {/* CUSTOM CODE — wrap the whole column in the conditional, not just its contents */}
      {(lastUpdatedAt || lastUpdatedBy) && (
        <div className={clsx('col', globalStyles.lastUpdated)}>
          <LastUpdated lastUpdatedAt={lastUpdatedAt} lastUpdatedBy={lastUpdatedBy} />
        </div>
      )}
      {/* CUSTOM CODE END */}
    </div>
  );
}
