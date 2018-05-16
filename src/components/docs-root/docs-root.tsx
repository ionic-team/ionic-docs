import { Component, Listen, State } from '@stencil/core';
import '@stencil/router'; // tslint:disable-line:no-import-side-effect

@Component({
  tag: 'docs-root'
})
export class DocsRoot {
  document: HTMLElement;

  @State() previewUrl: string;
  @State() previewCss: string;
  @State() isMenuOpen = false;
  @State() pageClass: string;

  @Listen('updatePreview')
  handleUpdatePreview(ev: any) {
    if (ev.detail.url) this.previewUrl = ev.detail.url;
    if (ev.detail.cssText) this.previewCss = ev.detail.cssText;
  }

  parseSection(path) {
    const match = /^(api|cli|native|pro)(\/.*)?/.exec(path);
    return match && match[1] || 'framework';
  }

  handleDocumentLoad = (document) => {
    this.previewUrl = document.previewUrl || null;
    this.pageClass = document.pageClass;
    this.setScrollPosition();
    this.closeMenu();
  }

  setScrollPosition() {
    const { hash } = window.location;
    const target = hash ? document.querySelector(hash) : this.document;
    if (target) {
      target.scrollIntoView();
    }
  }

  toggleMenu = () => {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu = () => {
    this.isMenuOpen = false;
  }

  render() {
    return (
      <stencil-router>
        <stencil-route url={['/docs/:document*', '/docs']} routeRender={props => {
          const documentPath = props.match.params.document || 'index';
          const section = this.parseSection(documentPath);
          const page = documentPath.replace(/\//g, '-');
          const layoutClass = {
            ['is-menu-open']: this.isMenuOpen,
            [`section-${section}`]: true,
            [`page-${this.pageClass}`]: true
          };

          return (
            <docs-layout class={layoutClass}>
              <docs-menu section={section} path={props.match.url}/>
              <docs-header section={section} isMenuOpen={this.isMenuOpen} onToggleClick={this.toggleMenu}/>
              <docs-content
                onOverlayClick={this.closeMenu}
                showOverlay={this.isMenuOpen}>
                  <docs-document
                    ref={node => { this.document = node; }}
                    path={documentPath}
                    onLoaded={this.handleDocumentLoad}
                    pageClass={page}/>
                  <docs-preview url={this.previewUrl} cssText={this.previewCss}/>
              </docs-content>
            </docs-layout>
          );
        }}/>
      </stencil-router>
    );
  }
}
