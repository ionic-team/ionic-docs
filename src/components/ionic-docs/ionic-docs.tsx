import { Component } from '@stencil/core';

@Component({
  tag: 'ionic-docs',
  styleUrl: 'ionic-docs.scss'
})
export class App {
  render() {
    return [
      <site-header />,
      <site-menu />,
      <stencil-router>
        <stencil-route url={['/docs/:docPath*', '/docs']}
          group="main"
          routeRender={({ match }) => [
            <site-content doc={match.params.docPath ? match.params.docPath : '/index' }/>,
            <site-preview-app/>
          ]}
        />
        <stencil-route exact url="/" routeRender={() =>
          <stencil-router-redirect url="/docs"/>
        }/>
      </stencil-router>,
    ];
  }
}
