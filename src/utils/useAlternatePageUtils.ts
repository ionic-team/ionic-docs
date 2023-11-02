/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * Original source: https://github.com/facebook/docusaurus/blob/791da2e4a1a53aa6309887059e3f112fcb35bec4/packages/docusaurus-theme-common/src/utils/useAlternatePageUtils.ts#L67-L77
 *
 * Modified to work with Ionic's locale setup.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';
import { applyTrailingSlash } from '@docusaurus/utils-common';

/**
 * Permits to obtain the url of the current page in another locale, useful to
 * generate hreflang meta headers etc...
 *
 * @see https://developers.google.com/search/docs/advanced/crawling/localized-versions
 */
export function useAlternatePageUtils(): {
  /**
   * Everything (pathname, base URL, etc.) is read from the context. Just tell
   * it which locale to link to and it will give you the alternate link for the
   * current page.
   */
  createUrl: ({
    /** The locale name to link to. */
    locale,
    /**
     * For hreflang SEO headers, we need it to be fully qualified (full
     * protocol/domain/path...); but for locale dropdowns, using a pathname is
     * good enough.
     */
    fullyQualified,
  }: {
    locale: string;
    fullyQualified: boolean;
  }) => string;
} {
  const {
    siteConfig: { baseUrl, url, trailingSlash },
    i18n: { defaultLocale, currentLocale },
  } = useDocusaurusContext();

  // TODO using useLocation().pathname is not a super idea
  // See https://github.com/facebook/docusaurus/issues/9170
  const { pathname } = useLocation();

  console.log('useAlternatePageUtils', {
    baseUrl,
    url,
    trailingSlash,
    defaultLocale,
    currentLocale,
    pathname,
  });

  const canonicalPathname = applyTrailingSlash(pathname, {
    trailingSlash,
    baseUrl,
  });

  console.log('canonicalPathname', canonicalPathname);

  const baseUrlUnlocalized = currentLocale === defaultLocale ? baseUrl : baseUrl.replace(`/${currentLocale}/`, '/');

  console.log('baseUrlUnlocalized', baseUrlUnlocalized);

  const pathnameSuffix = pathname.replace(baseUrl, '');

  console.log('pathnameSuffix', pathnameSuffix);

  function getLocalizedBaseUrl(locale: string) {
    return locale === defaultLocale ? `${baseUrlUnlocalized}` : `${baseUrlUnlocalized}${locale}/`;
  }

  // TODO support correct alternate url when localized site is deployed on
  // another domain
  function createUrl({ locale, fullyQualified }: { locale: string; fullyQualified: boolean }) {
    console.log('here...', {
      fullyQualified,
      url,
      localizedBaseUrl: getLocalizedBaseUrl(locale),
      pathnameSuffix,
    });
    return `${fullyQualified ? url : ''}${getLocalizedBaseUrl(locale)}${pathnameSuffix}`;
  }

  return { createUrl };
}
