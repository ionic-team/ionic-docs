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
        <stencil-route url="/docs/:document*" routeRender={props => (
          <docs-document path={`/docs/documents/${props.match.params.document || 'index'}.json`}/>
        )}/>
      </stencil-router>
    );
  }
}
