import '@ionic/core';

import { Component, State } from '@stencil/core';
import { LocationSegments, RouterHistory } from '@stencil/router';


@Component({
  tag: 'docs-root',
  styleUrl: 'root.css'
})
export class DocsRoot {
  history: RouterHistory = null;

  @State() isCollapsed = false;

  setHistory = ({ history }: { history: RouterHistory }) => {
    if (!this.history) {
      this.history = history;
      this.history.listen((location: LocationSegments) => {
        (window as any).gtag('config', 'UA-44023830-1', { 'page_path': location.pathname + location.search });
      });
    }
  }

  toggleCollapsed = () => {
    this.isCollapsed = !this.isCollapsed;
  }

  render() {
    const layout = {
      'Layout': true,
      'is-collapsed': this.isCollapsed
    };

    return (
      <stencil-router class={layout} scrollTopOffset={0}>
        <stencil-route style={{ display: 'none' }} routeRender={this.setHistory}/>
        <docs-header onToggleClick={this.toggleCollapsed}/>
        <docs-menu onToggleClick={this.toggleCollapsed}/>
        <stencil-route url="/docs/:page*" routeRender={props => (
          <docs-page path={`/docs/pages/${props.match.params.page || 'index'}.json`}/>
        )}/>
      </stencil-router>
    );
  }
}
