import { Component, Prop, h } from '@stencil/core';
import communityPlugins from '../data/native-plugins.json';
import EnterprisePlugins from './native-enterprise';

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

  <docs-menu-collapsible heading="Native Solutions">
    <docs-nav items={ this.nativeSolutions } />
  </docs-menu-collapsible>,

  <docs-menu-collapsible heading="Core Device">

    <ion-segment mode="ios"
                 value={this.category}
                 onIonChange={e => this.toggle(e) }
                 color="medium">
      <ion-segment-button value="community">
        <ion-label>Community</ion-label>
      </ion-segment-button>
      <ion-segment-button value="premier">
        <ion-label>Premier</ion-label>
      </ion-segment-button>
    </ion-segment>

    {this.category === 'community' ?
      <docs-nav items={this.communityPlugins} /> :
      <EnterprisePlugins/>
    }
  </docs-menu-collapsible>
]; }

intro = {
  'menu-native-paid': {
    'Home': '/docs/enterprise',
    'Community vs Premier': '/docs/enterprise'
  }
};

nativeSolutions = {
  '': {
    'Identity Vault': '/docs/enterprise/identity-vault',
    'Auth Connect': '/docs/enterprise/auth-connect',
    'Secure Storage': '/docs/enterprise/offline-storage'
  }
};

communityPlugins = {
  'menu-native-getting-started': {
    'Quickstart': '/docs/enterprise/quickstart'
  },
  'menu-native-plugins': Object.entries(communityPlugins).sort()
};
}
