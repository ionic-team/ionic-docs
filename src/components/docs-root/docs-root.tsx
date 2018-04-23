import { Component } from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'docs-root'
})
export class DocsRoot {
  render() {
    return (
      <stencil-router>
        <stencil-route url={['/docs', '/docs/:document']} routeRender={props => {
          return (
            <docs-layout>
              <docs-menu/>
              <docs-header/>
              <docs-content>
                <docs-document/>
                <docs-preview/>
              </docs-content>
            </docs-layout>
          );
        }}/>
      </stencil-router>
    );
  }
}
