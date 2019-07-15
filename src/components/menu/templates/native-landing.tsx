import { h } from '@stencil/core';
import plugins from '../data/native-plugins.json';

export default () => <docs-nav items={items}/>;
const communityPlugins = Object.entries(plugins).sort().slice(0, 6);
communityPlugins.unshift(['Overview', '/docs/native/overview']);
communityPlugins.push(['Show all CE plugins...', '/docs/native/overview']);
const items = {
  'Enterprise Edition': {
    'Overview': '/docs/enterprise',
    'Browser': '/docs/enterprise/inappbrowser',
    'Camera': '/docs/enterprise/camera',
    'Device': '/docs/enterprise/device',
    'Filesystem': '/docs/enterprise/filesystem',
    'Geolocation': '/docs/enterprise/geolocation',
    'Identity Vault': '/docs/enterprise/identity-vault',
    'Network Information': '/docs/enterprise/network-information',
    'Show all EE plugins...': '/docs/enterprise',
  },
  'Community Edition': communityPlugins,
};
