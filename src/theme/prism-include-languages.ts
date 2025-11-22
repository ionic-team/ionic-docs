/**
 * Prism is used to syntax highlight code blocks in markdown files.
 *
 * Original source:
 * @link https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-theme-classic/src/theme/prism-include-languages.ts
 *
 * Reason for overriding:
 * - Add Vue language support since it's not included in Prism
 */

import siteConfig from '@generated/docusaurus.config';
import type * as PrismNamespace from 'prismjs';
import type { Optional } from 'utility-types';

export default function prismIncludeLanguages(PrismObject: typeof PrismNamespace): void {
  const {
    themeConfig: { prism },
  } = siteConfig;
  const { additionalLanguages } = prism as { additionalLanguages: string[] };

  // Prism components work on the Prism instance on the window, while prism-
  // react-renderer uses its own Prism instance. We temporarily mount the
  // instance onto window, import components to enhance it, then remove it to
  // avoid polluting global namespace.
  // You can mutate PrismObject: registering plugins, deleting languages... As
  // long as you don't re-assign it

  const PrismBefore = globalThis.Prism;
  globalThis.Prism = PrismObject;

  additionalLanguages.forEach((lang) => {
    if (lang === 'php') {
      // eslint-disable-next-line global-require
      require('prismjs/components/prism-markup-templating.js');
    }
    // eslint-disable-next-line global-require, import/no-dynamic-require
    require(`prismjs/components/prism-${lang}`);
  });

  // CUSTOM CODE
  require('../theme/prism-languages/prism-vue');
  // CUSTOM CODE END

  // Clean up and eventually restore former globalThis.Prism object (if any)
  delete (globalThis as Optional<typeof globalThis, 'Prism'>).Prism;
  if (typeof PrismBefore !== 'undefined') {
    globalThis.Prism = PrismObject;
  }
}
