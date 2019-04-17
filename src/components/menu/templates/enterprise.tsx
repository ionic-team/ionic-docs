
export default () => <docs-nav items={items}/>;

const items = {
  'Ionic Enterprise': '/docs/enterprise',
  'Enterprise Plugins': {
    'Identity Vault': '/docs/enterprise/identity-vault',
    'Apple Wallet': '/docs/enterprise/apple-wallet',
    'mParticle': '/docs/enterprise/mparticle',
    'Native Core': '/docs/enterprise/native-core',
    'Camera': '/docs/enterprise/camera',
    'Clipboard': '/docs/enterprise/clipboard',
    'Device': '/docs/enterprise/device',
    'Dialogs': '/docs/enterprise/dialogs',
    'Geolocation': '/docs/enterprise/geolocation',
    'Inappbrowser': '/docs/enterprise/inappbrowser',
    'Media': '/docs/enterprise/media',
    'Media Capture': '/docs/enterprise/media-capture',
    'Network Information': '/docs/enterprise/network-information',
    'Screen Orientation': '/docs/enterprise/screen-orientation',
    'Splashscreen': '/docs/enterprise/splashscreen',
    'Statusbar': '/docs/enterprise/statusbar',
    'Vibration': '/docs/enterprise/vibration',
    'Active Directory': 'https://ionicframework.com/integrations/ms-activedirectory-ms-adal',
    'Offline Support': 'https://ionicframework.com/integrations/couchbase-lite'
  },
  'Community Plugins': '/docs/native',
};
