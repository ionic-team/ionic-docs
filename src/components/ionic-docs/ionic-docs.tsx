import { Component } from '@stencil/core';

@Component({
  tag: 'ionic-docs',
  styleUrl: 'ionic-docs.scss'
})
export class App {
  render() {
    return [
      // top level grid elements are prefixed 'site-' to keep things organized
      <site-header />,
      <site-menu />,
      <stencil-router>
        <stencil-route url={['/docs', 'docs/:docPath']}
          group="main"
          routeRender={( props ) => {
            // console.log('Route render!', props.match, props.match.params);
            const docPath = props.match.params.docPath ?
              props.match.params.docPath.substring(0, 4) : '/index';
            return [
              <site-content doc={docPath} />,
              <site-preview-app/>
            ];
          }}
        />
        <stencil-route url="/" exact={true} routeRender={() => {
          return <stencil-router-redirect url="/docs" />
        }}/>
      </stencil-router>,
    ];
  }
}
