import '@stencil/router';

import { Component, Listen, State } from '@stencil/core';

@Component({
  tag: 'ionic-docs',
  styleUrl: 'ionic-docs.scss'
})
export class IonicDocs {
  @State() currentSection = 'framework';

  @Listen('docs-section-changed')
  sectionChangedHandler(event) {
    this.currentSection = event.detail;
  }

  hostData() {
    return {
      class: { [`section-${this.currentSection}`]: true },
    };
  }

  render() {
    return [
      <site-header currentSection={ this.currentSection } />,
      <site-menu/>,
      <site-content/>,
      <site-preview-app/>
    ];
  }
}
