/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import useTOCHighlight from '@theme/hooks/useTOCHighlight';
import type { TOCProps } from '@theme/TOC';
import styles from './styles.module.scss';
import { TOCItem } from '@docusaurus/types';
import { useAllDocsData } from '@theme/hooks/useDocs';
import EditThisPage from '@theme/EditThisPage';

const LINK_CLASS_NAME = 'toc__link';
const ACTIVE_LINK_CLASS_NAME = 'toc__link--active';
const TOP_OFFSET = 100;

/* eslint-disable jsx-a11y/control-has-associated-label */
function Headings({
  toc,
  isChild,
}: {
  toc: readonly TOCItem[];
  isChild?: boolean;
}) {
  if (!toc.length) {
    return null;
  }
  return (
    <ul className={clsx('toc__list', styles.list)}>
      {toc.map(heading => (
        <li
          key={heading.id}
          className={clsx('toc__list-item', styles.listItem)}
        >
          <a
            href={`#${heading.id}`}
            className={clsx(LINK_CLASS_NAME, styles.link)}
            // Developer provided the HTML, so assume it's safe.
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: heading.value }}
          />
          <Headings isChild toc={heading.children} />
        </li>
      ))}
    </ul>
  );
}

function TOC({ toc, editUrl }: TOCProps): JSX.Element {
  const stuff = useAllDocsData();

  useTOCHighlight(LINK_CLASS_NAME, ACTIVE_LINK_CLASS_NAME, TOP_OFFSET);
  return (
    <div
      className={clsx(styles.toc, 'table-of-contents', 'thin-scrollbar', {
        [styles.tocEmpty]: toc.length === 0,
        'table-of-contents--empty': toc.length === 0,
      })}
    >
      <div className={clsx('toc__title', styles.title)}>Contents</div>
      <Headings toc={toc} />
      {editUrl && <EditThisPage editUrl={editUrl} />}
    </div>
  );
}

export default TOC;
