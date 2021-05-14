import '@ionic/core';
import { Build, Component, Event, EventEmitter, State, Watch, h } from '@stencil/core';
import { LocationSegments, RouterHistory } from '@stencil/router';

@Component({
  tag: 'docs-root',
  styleUrl: 'root.scss'
})
export class DocsRoot {
  history: RouterHistory | null = null;

  @State() isMenuToggled = false;

  setHistory = ({ history }: { history: RouterHistory }) => {
    if (!this.history) {
      this.history = history;
      this.history.listen(this.newPage.bind(this));
    }
  }

  @Event() pageChanged!: EventEmitter;
  newPage(location: LocationSegments) {
    this.pageChanged.emit(location);
    this.updateAds();
  }

  @Watch('isMenuToggled')
  lockScroll(isMenuToggled: boolean) {
    if (Build.isBrowser && this.isSmallViewport()) {
      document.body.classList.toggle('scroll-lock', isMenuToggled);
    }
  }

  updateAds = async () => {
    await customElements.whenDefined('internal-ad');
    const internalAd = document.querySelector('internal-ad') as any;
    await internalAd?.update();
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
        <docs-header toggleClickFn={this.toggleMenu}/>
        <docs-menu toggleClickFn={this.toggleMenu}/>
        <stencil-route
          url="/docs/:page*"
          routeRender={props => (
            <docs-page
              history={props.history}
              path={`/docs/pages/${props.match.params.page || 'index'}.json`}
              onClick={this.handlePageClick}
            />
          )}
        />
      </stencil-router>
    );
  }
}
