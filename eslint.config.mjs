import docusaurus from '@docusaurus/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import * as mdx from 'eslint-plugin-mdx';

import versions from './versions.json' with { type: 'json' };

// The current docs plus every older version still built, so an archived
// version drops out of the lint as soon as it leaves versions.json.
const docsDirs = ['docs', ...versions.map((version) => `versioned_docs/version-${version}`)];

/**
 * The build only checks links and anchors that go through Markdown or the
 * Docusaurus `Link` and `Heading` components. A raw `<a>` or `<h1>` to `<h6>`
 * is invisible to those checks, so these rules require the components.
 */
const rules = {
  '@docusaurus/no-html-links': 'error',
  '@docusaurus/prefer-docusaurus-heading': 'error',
};

export default [
  {
    // Generated from other repos when the site builds, so they are not edited here.
    ignores: docsDirs.flatMap((dir) => [`${dir}/native/**`, `${dir}/cli/commands/**`]),
  },
  {
    // Swizzled theme files keep upstream's eslint-disable comments for rules
    // this repo does not run.
    linterOptions: { reportUnusedDisableDirectives: 'off' },
  },
  {
    // .ts files cannot contain JSX, so they have nothing for these rules to check.
    files: ['src/**/*.{js,jsx,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: { '@docusaurus': docusaurus },
    rules,
  },
  {
    ...mdx.flat,
    // Code samples are page content, not markup, so they are not linted.
    files: docsDirs.map((dir) => `${dir}/**/*.mdx`),
    plugins: { ...mdx.flat.plugins, '@docusaurus': docusaurus },
    rules: { ...mdx.flat.rules, ...rules },
  },
];
