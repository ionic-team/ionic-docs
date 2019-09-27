import { h } from '@stencil/core';
import plugins from '../data/native-plugins.json';

export default () => <docs-nav items={items}/>;
const communityPlugins = Object.entries(plugins).sort().slice(0, 6);
communityPlugins.unshift(['menu-native-community-overview', '/docs/native/overview']);
communityPlugins.push(['menu-native-community-show-all', '/docs/native/overview']);
const items = {
  'menu-native-paid': {
    'menu-native-paid-overview': '/docs/enterprise',
    'Browser': '/docs/enterprise/inappbrowser',
    'Camera': '/docs/enterprise/camera',
    'Device': '/docs/enterprise/device',
    'Filesystem': '/docs/enterprise/filesystem',
    'Geolocation': '/docs/enterprise/geolocation',
    'Identity Vault': '/docs/enterprise/identity-vault',
    'Network Information': '/docs/enterprise/network-information',
    'menu-native-paid-show-all': '/docs/enterprise',
  },
  'menu-native-community': communityPlugins,
};
