import '@ionic/core';
import { Component, Prop, State, Watch } from '@stencil/core';
import { LocationSegments, RouterHistory } from '@stencil/router';

@Component({
  tag: 'docs-root',
  styleUrl: 'root.css'
})
export class DocsRoot {
  history: RouterHistory = null;

  @Prop({ context: 'isServer' }) private isServer: boolean;
  @State() isMenuToggled = false;

  setHistory = ({ history }: { history: RouterHistory }) => {
    if (!this.history) {
      this.history = history;
      this.history.listen((location: LocationSegments) => {
        (window as any).gtag('config', 'UA-44023830-1', { 'page_path': location.pathname + location.search });
      });
    }

    document.querySelectorAll('head .url').forEach(el => {
      if (el['href']) {
        el['href'] = el['href'].split('\/docs\/')[0] + '\/docs\/' + location.pathname.split('\/docs\/')[1];
      }
      if (el['content']) {
        el['content'] = el['content'].split('\/docs\/')[0] + '\/docs\/' + location.pathname.split('\/docs\/')[1];
      }
    });
  }

  @Watch('isMenuToggled')
  lockScroll(isMenuToggled: boolean) {
    if (!this.isServer && this.isSmallViewport()) {
      document.body.classList.toggle('scroll-lock', isMenuToggled);
    }
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
