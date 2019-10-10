import { h } from '@stencil/core';

export default () => <docs-nav items={ items } />;

const items = {
  'menu-native-community': '/docs/native/overview',
  'menu-native-paid': '/docs/enterprise',
  'menu-enterprise-getting-started': {
    'Quickstart': '/docs/enterprise/quickstart',
    'Setup': '/docs/enterprise/setup'
  },
  'menu-enterprise-authentication-security': {
    'Auth Connect': '/docs/enterprise/auth-connect',
    '': {
      'Auth0': '/docs/enterprise/auth-connect/auth0',
      'Azure AD B2C': '/docs/enterprise/auth-connect/azure-ad-b2c'
    },
    'Identity Vault': '/docs/enterprise/identity-vault',
    'Offline Storage': '/docs/enterprise/offline-storage'
  },
  'menu-enterprise-common-device-features': {
    'Android Permissions': '/docs/enterprise/android-permissions',
    'App Rate': '/docs/enterprise/app-rate',
    'App Version': '/docs/enterprise/app-version',
    'Badge': '/docs/enterprise/badge',
    'Browser': '/docs/enterprise/inappbrowser',
    'Calendar': '/docs/enterprise/calendar',
    'Camera': '/docs/enterprise/camera',
    'Clipboard': '/docs/enterprise/clipboard',
    'Contacts': '/docs/enterprise/contacts',
    'Deeplinks': '/docs/enterprise/deeplinks',
    'Device': '/docs/enterprise/device',
    'Dialogs': '/docs/enterprise/dialogs',
    'Email Composer': '/docs/enterprise/email-composer',
    'Filesystem': '/docs/enterprise/filesystem',
    'Geolocation': '/docs/enterprise/geolocation',
    'Globalization': '/docs/enterprise/globalization',
    'Haptics & Vibration': '/docs/enterprise/vibration',
    'Keyboard': '/docs/enterprise/keyboard',
    'Media': '/docs/enterprise/media',
    'Media Capture': '/docs/enterprise/media-capture',
    'Native Storage': '/docs/enterprise/nativestorage',
    'Network Information': '/docs/enterprise/network-information',
    'Screen Orientation': '/docs/enterprise/screen-orientation',
    'Social Sharing': '/docs/enterprise/social-sharing',
    'Splashscreen': '/docs/enterprise/splashscreen',
    'Statusbar': '/docs/enterprise/statusbar',
  },
  'menu-enterprise-integrated-services': {
    'Active Directory': 'https://ionicframework.com/integrations/ms-activedirectory-ms-adal',
    'mParticle': '/docs/enterprise/mparticle',
  },
  'menu-enterprise-payments': {
    'Apple Payment Pass': '/docs/enterprise/apple-payment-pass',
  },
};
