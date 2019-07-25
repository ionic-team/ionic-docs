import { h } from '@stencil/core';

export default () => <docs-nav items={items}/>;

const items = {
  'Introduction': {
    'Welcome': '/docs/studio',
    'Support': '/docs/studio/support',
  },
  'Setup': {
    'Installing Studio': '/docs/studio/setup/installation',
    'Native iOS & Android': '/docs/studio/setup/native',
  },
  'Documentation': {
    'Compose': '/docs/studio/compose',
    'Code': '/docs/studio/code',
    'Asset Management': '/docs/studio/assets',
    'Theming': '/docs/studio/theming',
    'Settings': '/docs/studio/settings',
    'Running Apps': '/docs/studio/running',
  },
  'Guides': {
    'Quickstart': '/docs/studio/guides/quickstart',
    'Routing and Navigation': '/docs/studio/guides/routing-and-navigation',
    'Using Native Functionality': '/docs/studio/guides/using-native-functionality',
  },
  'FAQ': '/docs/studio/faq',
};
