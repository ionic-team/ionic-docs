import { h } from '@stencil/core';

export default () => <docs-nav items={items} />;

const items = {
  'menu-appflow-tutorial': '/docs/appflow/tutorial',
  'menu-appflow-tutorial-basics': {
    'menu-appflow-tutorial-start': '/docs/appflow/tutorial/start',
    'menu-appflow-tutorial-web-build-preview': '/docs/appflow/tutorial/web-preview',
    'menu-appflow-tutorial-native-builds-101': '/docs/appflow/tutorial/android',
    'menu-appflow-tutorial-native-builds-advanced': '/docs/appflow/tutorial/ios'
  },
  'menu-appflow-tutorial-advanced': {
    'menu-appflow-tutorial-live-updates': '/docs/appflow/tutorial/live_updates',
    'menu-appflow-tutorial-automations': '/docs/appflow/tutorial/automations',
    'menu-appflow-tutorial-native-configs': '/docs/appflow/tutorial/native-configs',
    'menu-appflow-tutorial-environments': '/docs/appflow/tutorial/environments'
  }
};
