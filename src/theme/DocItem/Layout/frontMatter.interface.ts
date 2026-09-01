/**
 * Front matter fields this site adds on top of the ones Docusaurus defines. They are
 * set in the front matter of pages under `docs/` and `versioned_docs/`, and read by
 * the sibling `index.tsx`.
 *
 * This file is ours. Only `index.tsx` in this folder is a copy of upstream.
 *
 * Docusaurus exports `DocFrontMatter` as a type alias rather than an interface, so
 * declaration merging cannot add to it in place. Intersecting with it here keeps the
 * upstream fields, so reads of both these and Docusaurus's own stay checked.
 */

import type { DocFrontMatter } from '@docusaurus/plugin-content-docs';

export type DocsFrontMatter = DocFrontMatter & {
  /**
   * Renders a phone demo beside the page content. Setting it also suppresses the
   * table of contents, since the two compete for the same column.
   */
  demoUrl?: string;
  /** Source link shown alongside the phone demo. */
  demoSourceUrl?: string;
};
