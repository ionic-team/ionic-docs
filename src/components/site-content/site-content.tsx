import { Component, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'site-content',
  styleUrl: 'site-content.scss'
})
export class SiteContent {
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
      'class': {
        'is-menu-open': this.isMenuOpen
      }
    };
  }

  render() {
    return (
      <stencil-router>
        <stencil-route
          url={['/docs/:docPath*', '/docs']}
          // group="main"
          routeRender={loadMarkdownDocument}/>
      </stencil-router>
    );
  }
}

const loadMarkdownDocument = ({ match }) =>
  <doc-loader path={match.params.docPath ? match.params.docPath : 'index' }/>;
