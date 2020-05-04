import { Component, h } from '@stencil/core';
import communityPlugins from '../data/native-plugins.json';
import { l10n } from '../../../l10n';

@Component({
  tag: 'docs-menu-native',
  styleUrl: 'native.css'
})
export class DocsMenuNative {

  render() {
    return [
      <docs-menu-collapsible heading={l10n.getString('menu-native-getting-started')}>
        <docs-nav items={this.gettingStarted} />
      </docs-menu-collapsible>,

      <docs-menu-collapsible heading={l10n.getString('menu-native-plugins')}>
          <docs-nav items={this.communityPlugins} />
      </docs-menu-collapsible>
    ];
  }

  gettingStarted = {
    '': {
      'menu-native-home': '/docs/native',
      'menu-native-quickstart': '/docs/native/community',
      'menu-native-faq': '/docs/native/faq',
      'menu-native-community-v-premier': '/docs/native/community-vs-premier'
    }
  };

  nativeSolutions = {
    '': {
      'Overview': '/docs/enterprise/solutions',
      'Identity Vault': '/docs/enterprise/identity-vault',
      'Auth Connect': '/docs/enterprise/auth-connect',
      '': {
        'Auth0': '/docs/enterprise/auth-connect/auth0',
        'Azure AD B2C': '/docs/enterprise/auth-connect/azure-ad-b2c',
        'AWS Cognito': '/docs/enterprise/auth-connect/aws-cognito'
      },
      'Offline Storage': '/docs/enterprise/offline-storage'
    }
  };

  communityPlugins = {
    '': Object.entries(communityPlugins).sort()
  };

  premierPlugins = {
    'menu-enterprise-getting-started': {
      'menu-native-quickstart': '/docs/enterprise/quickstart',
      'menu-native-setup': '/docs/enterprise/setup'
    },
    'menu-enterprise-integrated-services': {
      'Apple Payment Pass': '/docs/enterprise/apple-payment-pass',
      'Auth0': '/docs/enterprise/auth-connect/auth0',
      'AWS Amplify': '/docs/enterprise/aws-amplify',
      'AWS Cognito': '/docs/enterprise/auth-connect/aws-cognito',
      'Azure AD B2C': '/docs/enterprise/auth-connect/azure-ad-b2c',
      'Couchbase Lite': '/docs/enterprise/couchbase-lite',
      'mParticle': '/docs/enterprise/mparticle'
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
  };
}
