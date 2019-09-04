import { h } from '@stencil/core';

export default () => <docs-nav items={ items } />;

const items = {
  'menu-native-ce': '/docs/native/overview',
  'menu-native-ee': '/docs/enterprise',
  'menu-enterprise-authentication-security': {
    'Auth Connect': '/docs/enterprise/auth-connect',
    'Identity Vault': '/docs/enterprise/identity-vault',
  },
  'menu-enterprise-common-device-features': {
    'Android Permissions': '/docs/enterprise/android-permissions',
    'App Version': '/docs/enterprise/app-version',
    'Badge': '/docs/enterprise/badge',
    'Browser': '/docs/enterprise/inappbrowser',
    'Calendar': '/docs/enterprise/calendar',
    'Camera': '/docs/enterprise/camera',
    'Clipboard': '/docs/enterprise/clipboard',
    'Contacts': '/docs/enterprise/contacts',
    'Device': '/docs/enterprise/device',
    'Dialogs': '/docs/enterprise/dialogs',
    'Email Composer': '/docs/enterprise/email-composer',
    'Filesystem': '/docs/enterprise/filesystem',
    'Geolocation': '/docs/enterprise/geolocation',
    'Haptics & Vibration': '/docs/enterprise/vibration',
    'Keyboard': '/docs/enterprise/keyboard',
    'Media': '/docs/enterprise/media',
    'Media Capture': '/docs/enterprise/media-capture',
    'Native Storage': '/docs/enterprise/nativestorage',
    'Network Information': '/docs/enterprise/network-information',
    'Screen Orientation': '/docs/enterprise/screen-orientation',
    'Splashscreen': '/docs/enterprise/splashscreen',
    'Statusbar': '/docs/enterprise/statusbar',
  },
  'menu-enterprise-integrated-services': {
    'Active Directory': 'https://ionicframework.com/integrations/ms-activedirectory-ms-adal',
    'mParticle': '/docs/enterprise/mparticle',
  },
  'menu-enterprise-inter-app-communication': {
    'Email Composer': '/docs/enterprise/email-composer',
  },
  'menu-enterprise-maps-navigation': {
    'Geolocation': '/docs/enterprise/geolocation',
  },
  'menu-enterprise-media': {
    'Media': '/docs/enterprise/media',
    'Media Capture': '/docs/enterprise/media-capture',
  },
  'menu-enterprise-native-ui': {
    'Dialogs': '/docs/enterprise/dialogs',
  },
  'menu-enterprise-notifications': {
    'Badge': '/docs/enterprise/badge',
  },
  'menu-enterprise-offline-data': {
    'Couchbase Lite': '/docs/enterprise/couchbase-lite',
  },
  'menu-enterprise-payments': {
    'Apple Payment Pass': '/docs/enterprise/apple-payment-pass',
  },
};
