import plugins from '../data/native-plugins.json';

export default () => <docs-nav items={items}/>;
const communityPlugins = Object.entries(plugins).sort().slice(0, 6);
communityPlugins.unshift(['概要', '/docs/native/overview']);
communityPlugins.push(['すべてのCEプラグイン...', '/docs/native/overview']);
const items = {
  'エンタープライズエディション': {
    '概要': '/docs/enterprise',
    'Browser': '/docs/enterprise/inappbrowser',
    'Camera': '/docs/enterprise/camera',
    'Device': '/docs/enterprise/device',
    'Filesystem': '/docs/enterprise/filesystem',
    'Geolocation': '/docs/enterprise/geolocation',
    'Identity Vault': '/docs/enterprise/identity-vault',
    'Network Information': '/docs/enterprise/network-information',
    'すべてのEEプラグイン...': '/docs/enterprise',
  },
  'コミュニティエディション': communityPlugins,
};
