import { useMemo } from 'react';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { toMarkdownPath } from '@site/plugins/docusaurus-plugin-llms-txt/lib/markdown-path';

const withoutTrailingSlash = (pathname: string) => pathname.replace(/\/+$/, '') || '/';

/**
 * Resolves the site-relative path of a page's markdown twin, or undefined when
 * it has none. Callers decide the origin, since the copy button has to stay on
 * the host being browsed while the canonical link tag names production.
 *
 * Only sidebar-reachable pages get a twin, and only in the default locale.
 * A doc's global data already carries `sidebar` when it is reachable, so the
 * client needs no extra data to work that out.
 */
export function useMarkdownTwin(): (pathname: string) => string | undefined {
  const allDocsData = useAllDocsData();
  const {
    siteConfig: { baseUrl },
    i18n: { currentLocale, defaultLocale },
  } = useDocusaurusContext();

  const permalinks = useMemo(() => {
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

  return (pathname: string) => {
    if (currentLocale !== defaultLocale) {
      return undefined;
    }

    // The home page answers on both `/docs` and `/docs/` and only the second
    // maps to `index.md`, so go by the doc's permalink, not the address bar.
    const permalink = permalinks.get(withoutTrailingSlash(pathname));
    return permalink ? `${baseUrl}${toMarkdownPath(permalink, baseUrl)}` : undefined;
  };
}
