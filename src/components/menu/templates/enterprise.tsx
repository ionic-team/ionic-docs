import { h } from '@stencil/core';

export default () => <docs-nav items={ items } />;

const items = {
  'Community Edition': '/docs/native/overview',
  'Enterprise Edition': '/docs/enterprise',
  'Authentication & Security': {
    'Identity Vault': '/docs/enterprise/identity-vault',
  },
  'Common Device Features': {
    'Android Permissions': '/docs/enterprise/android-permissions',
    'App Version': '/docs/enterprise/appversion',
    'Browser': '/docs/enterprise/inappbrowser',
    'Calendar': '/docs/enterprise/calendar',
    'Camera': '/docs/enterprise/camera',
    'Clipboard': '/docs/enterprise/clipboard',
    'Device': '/docs/enterprise/device',
    'Filesystem': '/docs/enterprise/filesystem',
    'Haptics & Vibration': '/docs/enterprise/vibration',
    'Network Information': '/docs/enterprise/network-information',
    'Screen Orientation': '/docs/enterprise/screen-orientation',
    'Splashscreen': '/docs/enterprise/splashscreen',
    'Statusbar': '/docs/enterprise/statusbar',
  },
  'Integrated Services': {
    'Active Directory': 'https://ionicframework.com/integrations/ms-activedirectory-ms-adal',
    'mParticle': '/docs/enterprise/mparticle',
  },
  'Inter-App Communication': {
    'Email Composer': '/docs/enterprise/email-composer',
  },
  'Maps & Navigation': {
    'Geolocation': '/docs/enterprise/geolocation',
  },
  'Media': {
    'Media': '/docs/enterprise/media',
    'Media Capture': '/docs/enterprise/media-capture',
  },
  'Native UI': {
    'Dialogs': '/docs/enterprise/dialogs',
  },
  'Notifications': {
    'Badge': '/docs/enterprise/badge',
  },
  'Offline & Data': {
    'Couchbase Lite': 'https://ionicframework.com/integrations/couchbase-lite',
    'Native Storage': '/docs/enterprise/nativestorage',
    'Offline Support': 'https://ionicframework.com/integrations/couchbase-lite',
  },
  'Payments': {
    'Apple Payment Pass': '/docs/enterprise/apple-payment-pass',
  },
};
