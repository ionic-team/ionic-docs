import plugins from '../data/native-plugins.json';

export default () => <docs-nav items={items}/>;

const items = {
  'Enterprise': {
    'Identity Vault': '/docs/enterprise/identity-vault',
    'Apple Wallet': '/docs/enterprise/apple-wallet',
    'Camera': '/docs/enterprise/camera',
    'Clipboard': '/docs/enterprise/clipboard',
    'Device': '/docs/enterprise/device',
    'Dialogs': '/docs/enterprise/dialogs',
    'Filesystem': '/docs/enterprise/filesystem',
    'Geolocation': '/docs/enterprise/geolocation',
    'Inappbrowser': '/docs/enterprise/inappbrowser',
    'Media': '/docs/enterprise/media',
    'Media Capture': '/docs/enterprise/media-capture',
    'mParticle': '/docs/enterprise/mparticle',
    'Network Information': '/docs/enterprise/network-information',
    'Screen Orientation': '/docs/enterprise/screen-orientation',
    'Splashscreen': '/docs/enterprise/splashscreen',
    'Statusbar': '/docs/enterprise/statusbar',
    'Vibration': '/docs/enterprise/vibration',
    'Active Directory': 'https://ionicframework.com/integrations/ms-activedirectory-ms-adal',
    'Offline Support': 'https://ionicframework.com/integrations/couchbase-lite'
  },
  'Plugins': Object.entries(plugins).sort()
};
