import { Component, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'site-content',
  styleUrl: 'site-content.scss'
})
export class SiteContent {
  @Prop() docPath: string;
  @Prop() onOverlayClick: () => void;
  @Prop() isMenuOpen: boolean;
  @Prop({ context: 'isServer' }) private isServer: boolean;

  @Listen('docLoaded')
  scrollToTop() {
    if (!this.isServer) {
      requestAnimationFrame(() => { document.documentElement.scrollTop = 0; });
    }
  }

  hostData() {
    return {
      'onClick': this.isMenuOpen ? this.onOverlayClick : null,
      'class': {
        'is-menu-open': this.isMenuOpen
      }
    };
  }

  render() {
    return <doc-loader path={this.docPath}/>;
  }
}
