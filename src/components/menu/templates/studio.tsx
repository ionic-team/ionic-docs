import { h } from '@stencil/core';

export default () => <docs-nav items={items}/>;

const items = {
  'Introduction': {
    'Welcome': '/docs/studio',
    'Support': '/docs/studio/support',
  },
  'Setup': {
    'Installation': '/docs/studio/setup/installation',
    'Native iOS & Android': '/docs/studio/setup/native',
  },
  'Quickstart': {
    'Overview': '/docs/studio/quickstart',
    'Code & Compose': '/docs/studio/quickstart/code-and-compose',
  },
  'Guides': {
    'Routing and Navigation': '/docs/studio/guides/routing-and-navigation',
  },
  'Documentation': {
    'Compose': '/docs/studio/compose',
    'Code': '/docs/studio/code',
    'Running Apps': '/docs/studio/running',
    'Asset Management': '/docs/studio/assets',
    'Theming': '/docs/studio/theming',
    'Settings': '/docs/studio/settings',
  }
};
