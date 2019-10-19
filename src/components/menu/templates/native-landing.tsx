import { h } from '@stencil/core';

export default () => <docs-nav items={ items } />;

const items = {
  'menu-native-paid': '/docs/enterprise',
  'menu-enterprise-authentication-security': {
    'Auth Connect': '/docs/enterprise/auth-connect',
    'Identity Vault': '/docs/enterprise/identity-vault',
    'Offline Storage': '/docs/enterprise/offline-storage'
  },
  'menu-enterprise-common-device-features': {
    'Apple Payment Pass': '/docs/enterprise/apple-payment-pass',
    'Browser': '/docs/enterprise/inappbrowser',
    'Camera': '/docs/enterprise/camera',
    'Contacts': '/docs/enterprise/contacts',
    'Device': '/docs/enterprise/device',
    'Filesystem': '/docs/enterprise/filesystem',
    'Geolocation': '/docs/enterprise/geolocation',
    'Media Capture': '/docs/enterprise/media-capture',
    'Network Information': '/docs/enterprise/network-information',
    'Statusbar': '/docs/enterprise/statusbar',
    'menu-native-paid-show-all': '/docs/enterprise'
  },
  'menu-native-community': '/docs/native/overview',
  'menu-native-community-oss': {
    '3D Touch': '/docs/native/three-dee-touch',
    'Backlight': '/docs/native/backlight',
    'Health': '/docs/native/health',
    'menu-native-community-show-all': '/docs/native/overview'
  }
};
