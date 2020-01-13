import { Component, Prop, h } from '@stencil/core';
import communityPlugins from '../data/native-plugins.json';
import { l10n } from '../../../l10n';

@Component({
  tag: 'docs-menu-native',
  styleUrl: 'native.css'
})
export class DocsMenuNative {

@Prop() category: 'community' | 'premier' = 'premier';

toggle(e: CustomEvent) {
  this.category = e.detail.value;
}

render() { return [
  <docs-nav items={ this.intro } />,

  <docs-menu-collapsible heading={l10n.getString('menu-native-solutions')}>
    <docs-nav items={ this.nativeSolutions } />
  </docs-menu-collapsible>,

  <docs-menu-collapsible heading={l10n.getString('menu-native-core-device')}>

    <ion-segment mode="ios"
                 value={this.category}
                 onIonChange={e => this.toggle(e) }
                 color="medium">
      <ion-segment-button value="community">
        <ion-label>{l10n.getString('menu-native-community')}</ion-label>
      </ion-segment-button>
      <ion-segment-button value="premier">
        <ion-label>{l10n.getString('menu-native-premier')}</ion-label>
      </ion-segment-button>
    </ion-segment>

    {this.category === 'community' ?
      <docs-nav items={this.communityPlugins} /> :
      <docs-nav items={this.premierPlugins} />
    }
  </docs-menu-collapsible>
]; }

intro = {
  'menu-native-paid': {
    'menu-native-home': '/docs/native',
    'menu-native-community-v-premier': '/docs/enterprise'
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
  'menu-native-getting-started': {
    'menu-native-quickstart': '/docs/native/community',
    'menu-native-faq': '/docs/native/faq'
  },
  'menu-native-plugins': Object.entries(communityPlugins).sort()
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
