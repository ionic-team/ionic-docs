
export default () => <docs-nav items={ items } />;

const items = {
  'Community Edition': '/docs/native/overview',
  'Enterprise Edition': '/docs/enterprise',
  '認証とセキュリティ': {
    'Identity Vault': '/docs/enterprise/identity-vault',
  },
  '一般的なデバイス機能': {
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
  '統合サービス': {
    'Active Directory': 'https://ionicframework.com/integrations/ms-activedirectory-ms-adal',
    'mParticle': '/docs/enterprise/mparticle',
  },
  'アプリケーション間通信': {
    'Email Composer': '/docs/enterprise/email-composer',
  },
  '地図とガイド': {
    'Geolocation': '/docs/enterprise/geolocation',
  },
  'メディア': {
    'Media': '/docs/enterprise/media',
    'Media Capture': '/docs/enterprise/media-capture',
  },
  'ネイティブUI': {
    'Dialogs': '/docs/enterprise/dialogs',
  },
  '通知': {
    'Badge': '/docs/enterprise/badge',
  },
  'オフラインデータ': {
    'Couchbase Lite': 'https://ionicframework.com/integrations/couchbase-lite',
    'Native Storage': '/docs/enterprise/nativestorage',
    'Offline Support': 'https://ionicframework.com/integrations/couchbase-lite',
  },
  '支払い': {
    'Apple Payment Pass': '/docs/enterprise/apple-payment-pass',
  },
};
