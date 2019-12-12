import { h } from '@stencil/core';
import plugins from '../data/native-plugins.json';

export default () => [
  <docs-nav items={ intro } />,
  <div class="collapseable">
    <docs-nav items={ nativeSolutions } />
  </div>,
  <div class="collapseable">
    <strong>Core Device</strong>
    <ion-segment>
      <ion-segment-button value="community">
        <ion-label>Community</ion-label>
      </ion-segment-button>
      <ion-segment-button value="premier">
        <ion-label>Premier</ion-label>
      </ion-segment-button>
    </ion-segment>
    <docs-nav items={ corePlugins } />
  </div>
];

const intro = {
  'menu-native-paid': {
    'Home': '/docs/enterprise',
    'Community vs Premier': '/docs/enterprise'
  }
};

const nativeSolutions = {
  'menu-native-solutions': {
    'Identity Vault': '/docs/enterprise/identity-vault',
    'Auth Connect': '/docs/enterprise/auth-connect',
    'Secure Storage': '/docs/enterprise/offline-storage'
  }
};

const corePlugins = {
  'menu-native-getting-started': {
    'Quickstart': '/docs/enterprise/quickstart'
  },
  'menu-native-plugins': Object.entries(plugins).sort()
};

