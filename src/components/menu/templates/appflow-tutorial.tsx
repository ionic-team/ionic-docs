import { h } from '@stencil/core';

export default () => <docs-nav items={items} />;

const items = {
  'menu-appflow-tutorial': '/docs/appflow/tutorial',
  'menu-appflow-tutorial-basics': {
    'menu-appflow-tutorial-start': '/docs/appflow/tutorial/start',
    'menu-appflow-tutorial-native-builds-101': '/docs/appflow/tutorial/native-builds',
    'menu-appflow-tutorial-native-builds-advanced': '/docs/appflow/tutorial/advanced-native-builds'
  },
  'menu-appflow-tutorial-advanced': {
    'menu-appflow-tutorial-live-updates': '/docs/appflow/tutorial/live-updates',
    'menu-appflow-tutorial-native-configs': '/docs/appflow/tutorial/native-configs',
    'menu-appflow-tutorial-environments': '/docs/appflow/tutorial/environments'
  }
};
