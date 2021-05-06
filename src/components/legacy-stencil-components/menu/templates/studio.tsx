import { h } from '@stencil/core';

export default () => <docs-nav items={items}/>;

const items = {
  'menu-studio-introduction': {
    'menu-studio-introduction-welcome': '/docs/studio',
    'menu-studio-introduction-support': '/docs/studio/support',
  },
  'menu-studio-setup': {
    'menu-studio-setup-installation': '/docs/studio/setup/installation',
    'menu-studio-setup-native': '/docs/studio/setup/native',
  },
  'menu-studio-documentation': {
    'menu-studio-documentation-start': '/docs/studio/start',
    'menu-studio-documentation-designer': '/docs/studio/designer',
    'menu-studio-documentation-code': '/docs/studio/code',
    'menu-studio-documentation-assets': '/docs/studio/assets',
    'menu-studio-documentation-theming': '/docs/studio/theming',
    'menu-studio-documentation-settings': '/docs/studio/settings',
    'menu-studio-documentation-running': '/docs/studio/running',
    'menu-studio-documentation-terminal': '/docs/studio/terminal',
  },
  'menu-studio-guides': {
    // 'menu-studio-guides-quickstart': '/docs/studio/guides/quickstart',
    'menu-studio-guides-routing': '/docs/studio/guides/routing-and-navigation',
    'menu-studio-guides-functionality': '/docs/studio/guides/using-native-functionality',
  },
  'menu-studio-faq': '/docs/studio/faq',
};
