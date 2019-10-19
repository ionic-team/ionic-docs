import '@ionic/core';

import { Build, Component, Event, EventEmitter, State, Watch, h } from '@stencil/core';
import { LocationSegments, RouterHistory } from '@stencil/router';

@Component({
  tag: 'docs-root',
  styleUrl: 'root.css'
})
export class DocsRoot {
  history: RouterHistory = null;

  @State() isMenuToggled = false;

  setHistory = ({ history }: { history: RouterHistory }) => {
    if (!this.history) {
      this.history = history;
      this.history.listen(this.newPage);
    }
  }

  @Event() pageChanged: EventEmitter;
  newPage(location: LocationSegments) {
    (window as any).gtag('config', 'UA-44023830-1', { 'page_path': location.pathname + location.search });
    this.pageChanged.emit(location);
  }

  @Watch('isMenuToggled')
  lockScroll(isMenuToggled: boolean) {
    if (Build.isBrowser && this.isSmallViewport()) {
      document.body.classList.toggle('scroll-lock', isMenuToggled);
    }
  }

  constructor() {
    this.newPage = this.newPage.bind(this);
  }

  toggleMenu = () => {
    this.isMenuToggled = !this.isMenuToggled;
  }

  handlePageClick = () => {
    if (this.isSmallViewport() && this.isMenuToggled) {
      this.isMenuToggled = false;
    }
  }

  isSmallViewport() {
    return matchMedia && matchMedia('(max-width: 768px)').matches;
  }

  render() {
    const layout = {
      'Layout': true,
      'is-menu-toggled': this.isMenuToggled
    };

    return (
      <stencil-router class={layout}>
        <stencil-route style={{ display: 'none' }} routeRender={this.setHistory}/>
        <docs-header onToggleClick={this.toggleMenu}/>
        <docs-menu onToggleClick={this.toggleMenu}/>
        <stencil-route url="/docs/:page*" routeRender={props => (
          <docs-page
            history={props.history}
            path={`/docs/pages/${props.match.params.page || 'index'}.json`}
            onClick={this.handlePageClick}/>
        )}/>
      </stencil-router>
    );
  }
}
