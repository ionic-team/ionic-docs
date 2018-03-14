import '@stencil/router';

import { Component, Element, Listen, State } from '@stencil/core';

@Component({
  tag: 'ionic-docs',
  styleUrl: 'ionic-docs.scss'
})
export class IonicDocs {
  @Element() el: Element;
  // curr
  @State() currentSection = 'framework';

  @Listen('docs-section-changed')
  sectionChangedHandler(event) {
    this.currentSection = event.detail;
  }

  @Listen('window:docLoaded')
  onDocLoaded(e) {
    if (!e.detail || !e.detail['path']) {
      return;
    }
    // Update the page specific class
    const path = e.detail['path'];
    const classes = this.el.className.split(' ').filter(function(c) {
      return c.lastIndexOf('page-', 0) !== 0;
    });
    classes.push(`page-${path.replace(/\//g, '-')}`);
    this.el.className = classes.join(' ').trim();

    if (e.detail.previewUrl) {
      this.el.classList.add('has-preview');
    } else {
      this.el.classList.remove('has-preview');
    }
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
