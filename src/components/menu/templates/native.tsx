import { h } from '@stencil/core';
import plugins from '../data/native-plugins.json';

export default () => <docs-nav items={items}/>;

const items = {
  'menu-native-paid': '/docs/enterprise',
  'menu-native-community': '/docs/native/overview',
  'menu-native-community-all': Object.entries(plugins).sort()
};
