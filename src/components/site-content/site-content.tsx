import { Component, Element, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'site-content',
  styleUrl: 'site-content.scss'
})
export class SiteContent {
  @Element() el;
  @Prop() docPath: string;
  @Prop() onOverlayClick: () => void;
  @Prop() isMenuOpen: boolean;
  @Prop({ context: 'isServer' }) private isServer: boolean;

  @Listen('docLoaded')
  scrollToTop() {
    if (!this.isServer) {
      requestAnimationFrame(() => {
        document.documentElement.scrollTop = 0;
        this.el.scrollTop = 0;
      });
    }
  }

  hostData() {
    return {
      'class': {
        'is-menu-open': this.isMenuOpen
      }
    };
  }

  render() {
    return [
      <div class="content-overlay" onClick={this.onOverlayClick}/>,
      <doc-loader path={this.docPath}/>
    ];
  }
}
