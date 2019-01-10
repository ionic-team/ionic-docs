import { Component } from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'docs-root',
  styleUrl: 'root.css'
})
export class DocsRoot {
  render() {
    return (
      <stencil-router class="Layout" scrollTopOffset={0}>
        <docs-header/>
        <docs-menu/>
        <stencil-route url="/docs/:page*" routeRender={props => (
          <docs-page path={`/docs/pages/${props.match.params.page || 'index'}.json`}/>
        )}/>
      </stencil-router>
    );
  }
}
