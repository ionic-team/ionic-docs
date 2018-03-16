import '@stencil/router';

import { Component, Element, Listen, State } from '@stencil/core';

@Component({
  tag: 'ionic-docs',
  styleUrl: 'ionic-docs.css'
})
export class IonicDocs {
  @Element() el: Element;
  // curr
  @State() currentSection = 'framework';

  @Listen('docs-section-changed')
  sectionChangedHandler(event) {
    this.currentSection = event.detail;
  }

  @Listen('docLoaded')
  onDocLoaded({ detail }) {
    if (!detail || !detail.path) return;
    this.removePageClass();
    this.el.classList.add(`page-${detail.path.replace(/\//g, '-')}`);
    this.el.classList.toggle('has-preview', typeof detail.previewUrl === 'string');
  }

  removePageClass() {
    this.el.className = this.el.className.split(' ')
      .filter(str => str.indexOf('page-') !== 0)
      .join(' ');
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
