import { Component } from '@stencil/core';

@Component({
  tag: 'ionic-docs',
  styleUrl: 'ionic-docs.scss'
})
export class App {
  render() {
    return (
      <div class="app">
        {/*<site-header />*/}
        <div class="wrapper">
          <site-menu />
          <site-content>
            <stencil-router>

              <stencil-route url="/" component="landing-page" exact={true} />

              <stencil-route url="/docs/:pageName"
                routeRender={( props: { [key: string]: any}) => {
                  const map = {
                    'intro': 'intro/index.html',
                  };
                  return (
                    <document-component pages={[map[props.match.params.pageName]]} />
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
