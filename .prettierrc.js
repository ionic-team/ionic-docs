/**
 * Prettier configuration for the docs site.
 */

const ionicConfig = require('@ionic/prettier-config');

module.exports = {
  ...ionicConfig,
  // Override the trailingComma setting to avoid trailing commas in function arguments and JSX props.
  trailingComma: 'es5',
  overrides: [
    ...ionicConfig.overrides,
    {
      files: ['*.md', '*.mdx'],
      // GitHub alerts such as `> [!NOTE]` need the marker on its own line.
      excludeFiles: ['CONTRIBUTING.md'],
      options: { proseWrap: 'never' },
    },
  ],
};
