import { Component } from '@stencil/core';

@Component({
  tag: 'ionic-docs',
  styleUrl: 'ionic-docs.scss'
})
export class App {
  render() {
    return (
      <div class="app">
        <div class="wrapper">
          <site-menu />
          <site-content id="main-content">
            <content-header />

            <div class="sub-content">
              <stencil-router>

                <stencil-route url="/docs/" component="landing-page" exact={true} group="main" />

                <stencil-route url="/docs/:docPath*"
                  group="main"
                  routeRender={( props: {[key: string]: any}) => {
                    console.log('Route render!', props.match, props.match.params);
                    return (
                      <document-component docPath={props.match.params.docPath} />
                    );
                  }}
                />
                <stencil-route url="/" exact={true} routeRender={
                  (props: { [key: string]: any}) => {
                    return [
                      <span>rendering /demo2</span>,
                      <stencil-router-redirect url="/docs/" />
                    ];
                  }
                }></stencil-route>
              </stencil-router>
            </div>
          </site-content>
        </div>
      </div>
    );
  }
}
