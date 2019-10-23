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
      'Azure AD B2C': '/docs/enterprise/auth-connect/azure-ad-b2c',
      'AWS Cognito': '/docs/enterprise/auth-connect/aws-cognito'
    },
    'Identity Vault': '/docs/enterprise/identity-vault',
    'Offline Storage': '/docs/enterprise/offline-storage'
  },
  'menu-enterprise-common-device-features': {
    'Android Permissions': '/docs/enterprise/android-permissions',
    'App Rate': '/docs/enterprise/app-rate',
    'App Version': '/docs/enterprise/app-version',
    'Badge': '/docs/enterprise/badge',
    'Calendar': '/docs/enterprise/calendar',
    'Camera': '/docs/enterprise/camera',
    'Clipboard': '/docs/enterprise/clipboard',
    'Contacts': '/docs/enterprise/contacts',
    'Deep Links': '/docs/enterprise/deeplinks',
    'Device': '/docs/enterprise/device',
    'Dialogs': '/docs/enterprise/dialogs',
    'Email Composer': '/docs/enterprise/email-composer',
    'Filesystem': '/docs/enterprise/filesystem',
    'Geolocation': '/docs/enterprise/geolocation',
    'Globalization': '/docs/enterprise/globalization',
    'InAppBrowser': '/docs/enterprise/inappbrowser',
    'Keyboard': '/docs/enterprise/keyboard',
    'Media': '/docs/enterprise/media',
    'Media Capture': '/docs/enterprise/media-capture',
    'Native Storage': '/docs/enterprise/nativestorage',
    'Network Information': '/docs/enterprise/network-information',
    'Screen Orientation': '/docs/enterprise/screen-orientation',
    'Social Sharing': '/docs/enterprise/social-sharing',
    'Splash Screen': '/docs/enterprise/splashscreen',
    'Status Bar': '/docs/enterprise/statusbar',
    'Vibration': '/docs/enterprise/vibration'
  },
  'menu-enterprise-integrated-services': {
    'Apple Payment Pass': '/docs/enterprise/apple-payment-pass',
    'AWS Amplify': 'https://ionicframework.com/integrations/aws-amplify',
    'mParticle': '/docs/enterprise/mparticle'
  }
};
