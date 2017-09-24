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
          <site-content>
            <content-header />
            <stencil-router>

              <stencil-route url="/" component="landing-page" exact={true} />

              <stencil-route url="/:docPath*"
                routeRender={( props: {[key: string]: any}) => {
                  console.log('Route render!', props.match, props.match.params);
                  return (
                    <document-component docPath={props.match.params.docPath} />
                  );
                }}
              />
            </stencil-router>
          </site-content>
        </div>
      </div>
    );
  }
}
