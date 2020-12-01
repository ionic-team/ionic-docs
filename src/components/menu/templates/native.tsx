import { Component, h } from '@stencil/core';

import { l10n } from '../../../l10n';
import communityPlugins from '../data/native-plugins.json';

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
      'menu-native-community': '/docs/native/community',
      'menu-native-faq': '/docs/native/faq',
      'menu-native-community-v-premier': 'https://ionic.io/docs/premier-plugins'
    }
  };

  communityPlugins = {
    '': Object.entries(communityPlugins).sort()
  };
}
