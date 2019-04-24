import plugins from '../data/native-plugins.json';

export default () => <docs-nav items={items}/>;

const items = {
  'Enterprise Edition Plugins': {
    'Camera': '/docs/enterprise/camera',
    'Device': '/docs/enterprise/device',
    'Filesystem': '/docs/enterprise/filesystem',
    'Geolocation': '/docs/enterprise/geolocation',
    'Identity Vault': '/docs/enterprise/identity-vault',
    'Inappbrowser': '/docs/enterprise/inappbrowser',
    'Network Information': '/docs/enterprise/network-information',
    'See All Enterprise Plugins': '/docs/enterprise',
  },
  'Community Plugins': Object.entries(plugins).sort()
};
