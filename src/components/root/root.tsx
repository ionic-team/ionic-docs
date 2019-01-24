import { Component } from '@stencil/core';
import { LocationSegments, RouterHistory } from '@stencil/router';


@Component({
  tag: 'docs-root',
  styleUrl: 'root.css'
})
export class DocsRoot {
  history: RouterHistory = null;

  setHistory = ({ history }: { history: RouterHistory }) => {
    if (!this.history) {
      this.history = history;
      this.history.listen((location: LocationSegments) => {
        (window as any).gtag('config', 'UA-44023830-1', { 'page_path': location.pathname + location.search });
      });
    }
  }

  render() {
    return (
      <stencil-router class="Layout" scrollTopOffset={0}>
        <stencil-route style={{ display: 'none' }} routeRender={this.setHistory}/>
        <docs-header/>
        <docs-menu/>
        <stencil-route url="/docs/:page*" routeRender={props => (
          <docs-page path={`/docs/pages/${props.match.params.page || 'index'}.json`}/>
        )}/>
      </stencil-router>
    );
  }
}
