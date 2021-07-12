/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { ReactNode, useState, useCallback } from 'react';
import { MDXProvider } from '@mdx-js/react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import renderRoutes from '@docusaurus/renderRoutes';
import type { PropVersionMetadata } from '@docusaurus/plugin-content-docs-types';
import Layout from '@theme/Layout';
import Navbar from '@theme/Navbar';
import DocSidebar from '@theme/DocSidebar';
import MDXComponents from '@theme/MDXComponents';
import NotFound from '@theme/NotFound';
import type { DocumentRoute } from '@theme/DocItem';
import type { Props } from '@theme/DocPage';
import IconArrow from '@theme/IconArrow';
import { matchPath } from '@docusaurus/router';
import { translate } from '@docusaurus/Translate';
import TOC from '@theme/TOC';

import clsx from 'clsx';
import styles from './styles.module.css';
import { ThemeClassNames, docVersionSearchTag } from '@docusaurus/theme-common';

type DocPageContentProps = {
  readonly currentDocRoute: DocumentRoute;
  readonly versionMetadata: PropVersionMetadata;
  readonly children: ReactNode;
};

function getSidebar({ versionMetadata, currentDocRoute }) {
  function addTrailingSlash(str: string): string {
    return str.endsWith('/') ? str : `${str}/`;
  }
  function removeTrailingSlash(str: string): string {
    return str.endsWith('/') ? str.slice(0, -1) : str;
  }

  const { permalinkToSidebar, docsSidebars } = versionMetadata;

  // With/without trailingSlash, we should always be able to get the appropriate sidebar
  // note: docs plugin permalinks currently never have trailing slashes
  // trailingSlash is handled globally at the framework level, not plugin level
  const sidebarName =
    permalinkToSidebar[currentDocRoute.path] ||
    permalinkToSidebar[addTrailingSlash(currentDocRoute.path)] ||
    permalinkToSidebar[removeTrailingSlash(currentDocRoute.path)];

  const sidebar = docsSidebars[sidebarName];
  return { sidebar, sidebarName };
}

function DocPageContent({
  currentDocRoute,
  versionMetadata,
  children,
}: DocPageContentProps): JSX.Element {
  const { siteConfig, isClient } = useDocusaurusContext();
  const { pluginId, version } = versionMetadata;
  const { sidebarName, sidebar } = getSidebar({
    versionMetadata,
    currentDocRoute,
  });

  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  const [hiddenSidebar, setHiddenSidebar] = useState(false);
  const toggleSidebar = useCallback(() => {
    if (hiddenSidebar) {
      setHiddenSidebar(false);
    }

    setHiddenSidebarContainer(!hiddenSidebarContainer);
  }, [hiddenSidebar]);

  return (
    <Layout
      key={isClient}
      wrapperClassName={ThemeClassNames.wrapper.docPages}
      pageClassName={ThemeClassNames.page.docPage}
      searchMetadatas={{
        version,
        tag: docVersionSearchTag(pluginId, version),
      }}
    >
      <div className={styles.docPage}>
        {sidebar && (
          <>
            <DocSidebar
              key={
                // Reset sidebar state on sidebar changes
                // See https://github.com/facebook/docusaurus/issues/3414
                sidebarName
              }
              sidebar={sidebar}
              path={currentDocRoute.path}
              sidebarCollapsible={
                siteConfig.themeConfig?.sidebarCollapsible ?? true
              }
              onCollapse={toggleSidebar}
              isHidden={hiddenSidebar}
            />

            {hiddenSidebar && (
              <div
                className={styles.collapsedDocSidebar}
                title={translate({
                  id: 'theme.docs.sidebar.expandButtonTitle',
                  message: 'Expand sidebar',
                  description:
                    'The ARIA label and title attribute for expand button of doc sidebar',
                })}
                aria-label={translate({
                  id: 'theme.docs.sidebar.expandButtonAriaLabel',
                  message: 'Expand sidebar',
                  description:
                    'The ARIA label and title attribute for expand button of doc sidebar',
                })}
                tabIndex={0}
                role="button"
                onKeyDown={toggleSidebar}
                onClick={toggleSidebar}
              >
                <IconArrow className={styles.expandSidebarButtonIcon} />
              </div>
            )}
          </>
        )}
        <div
          className={clsx('doc-page__end', styles.docPageEnd)}
          onScroll={({ target }) => {
            target.dispatchEvent(new CustomEvent('scroll'));
          }}
        >
          <Navbar />
          <main
            className={clsx(styles.docMainContainer, {
              [styles.docMainContainerEnhanced]:
                hiddenSidebarContainer || !sidebar,
            })}
          >
            <div
              className={clsx('container padding-top--md padding-bottom--lg', {
                [styles.docItemWrapperEnhanced]: hiddenSidebarContainer,
              })}
            >
              <MDXProvider components={MDXComponents}>{children}</MDXProvider>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}

function DocPage(props: Props): JSX.Element {
  const {
    route: { routes: docRoutes },
    versionMetadata,
    location,
  } = props;
  const currentDocRoute = docRoutes.find(docRoute =>
    matchPath(location.pathname, docRoute),
  );
  if (!currentDocRoute) {
    return <NotFound {...props} />;
  }
  return (
    <DocPageContent
      currentDocRoute={currentDocRoute}
      versionMetadata={versionMetadata}
    >
      {renderRoutes(docRoutes, { versionMetadata })}
    </DocPageContent>
  );
}

export default DocPage;
