import { Component, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'site-content',
  styleUrl: 'site-content.scss'
})
export class SiteContent {
  @Prop({ context: 'isServer' }) private isServer: boolean;

  @Listen('docLoaded')
  scrollToTop() {
    if (!this.isServer) {
      requestAnimationFrame(() => { document.documentElement.scrollTop = 0; });
    }
  }

  render() {
    return (
      <stencil-router>
          <stencil-route
            url={['/docs/:docPath*', '/docs']}
            group="main"
            routeRender={loadMarkdownDocument}/>
          <stencil-route exact url="/" routeRender={redirectToHome}/>
      </stencil-router>
    );
  }
}

const loadMarkdownDocument = ({ match }) =>
  <doc-loader path={match.params.docPath ? match.params.docPath : 'index' }/>;

const redirectToHome = () =>
  <stencil-router-redirect url="/docs"/>;
