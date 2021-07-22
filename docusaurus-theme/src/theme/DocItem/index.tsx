/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import DocDemo from '@theme/DocDemo';
import DocPaginator from '@theme/DocPaginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import Seo from '@theme/Seo';
import LastUpdated from '@theme/LastUpdated';
import TOC from '@theme/TOC';
import EditThisPage from '@theme/EditThisPage';
import { MainHeading } from '@theme/Heading';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { useActivePlugin, useVersions } from '@theme/hooks/useDocs';

function DocItem(props) {
  const { content: DocContent, versionMetadata } = props;
  const { metadata, frontMatter } = DocContent;
  const {
    container_width: containerWidth,
    image,
    keywords,
    hide_title: hideTitle,
    hide_table_of_contents: hideTableOfContents,
    demoUrl,
    demoSourceUrl,
  } = frontMatter;
  const {
    description,
    title,
    permalink,
    editUrl,
    lastUpdatedAt,
    formattedLastUpdatedAt,
    lastUpdatedBy,
  } = metadata;

  const { pluginId } = useActivePlugin({
    failfast: true,
  });
  const versions = useVersions(pluginId); // If site is not versioned or only one version is included
  // we don't show the version badge
  // See https://github.com/facebook/docusaurus/issues/3362

  const showVersionBadge = versions.length > 1; // We only add a title if:
  // - user asks to hide it with frontmatter
  // - the markdown content does not already contain a top-level h1 heading

  const shouldAddTitle =
    !hideTitle && typeof DocContent.contentTitle === 'undefined';

  const pageCSSClass = `page-${permalink
    .replace(/\/$/, '')
    .replace(/\//g, '-')}`;
  return (
    <>
      <Seo
        {...{
          title,
          description,
          keywords,
          image,
        }}
      />
      <div className={clsx(pageCSSClass, styles.docItemWrapper)}>
        <div className={styles.docItemMain}>
          <DocVersionBanner versionMetadata={versionMetadata} />
          <div
            className={styles.docItemContainer}
            style={{ maxWidth: containerWidth || '39rem' }}
          >
            <article>
              {/* {showVersionBadge && (
                <div>
                  <span className="badge badge--secondary">
                    Version: {versionMetadata.label}
                  </span>
                </div>
              )} */}

              <div className="markdown">
                {/*
                   Title can be declared inside md content or declared through frontmatter and added manually
                   To make both cases consistent, the added title is added under the same div.markdown block
                   See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120
                   */}
                {shouldAddTitle && <MainHeading>{title}</MainHeading>}
                <DocContent />
              </div>
            </article>
            <div
              className={clsx(
                styles.docItemPaginator,
                'margin-top--xl',
                'margin-bottom--xl',
              )}
            >
              <DocPaginator metadata={metadata} />
            </div>

            {(editUrl || lastUpdatedAt || lastUpdatedBy) && (
              <div className="margin-vert--lg">
                <div className="row">
                  <div className="col">
                    {editUrl && <EditThisPage editUrl={editUrl} />}
                  </div>

                  <div className={clsx('col', styles.lastUpdated)}>
                    {(lastUpdatedAt || lastUpdatedBy) && (
                      <LastUpdated
                        lastUpdatedAt={lastUpdatedAt}
                        formattedLastUpdatedAt={formattedLastUpdatedAt}
                        lastUpdatedBy={lastUpdatedBy}
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {!hideTableOfContents && DocContent.toc ? (
          <TOC
            toc={DocContent.toc}
            editUrl={editUrl}
            className={clsx(styles.tableOfContents)}
          />
        ) : (
          demoUrl && (
            <div
              className={clsx(
                'docDemoWrapper',
                styles['docDemoWrapper--noToc'],
                styles.docDemoWrapper,
              )}
            >
              <DocDemo url={demoUrl} source={demoSourceUrl} />
            </div>
          )
        )}
      </div>
    </>
  );
}

export default DocItem;
