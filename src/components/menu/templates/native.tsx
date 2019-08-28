import { h } from '@stencil/core';
import plugins from '../data/native-plugins.json';

export default () => <docs-nav items={items}/>;

const items = {
  'menu-native-ce': '/docs/native/overview',
  'menu-native-ee': '/docs/enterprise',
  'menu-native-plugins': Object.entries(plugins).sort()
};
