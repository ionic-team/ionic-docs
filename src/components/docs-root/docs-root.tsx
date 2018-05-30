import { Component, State } from '@stencil/core';
import '@stencil/router'; // tslint:disable-line:no-import-side-effect

@Component({
  tag: 'docs-root'
})
export class DocsRoot {
  document: HTMLElement;

  @State() previewUrl: string;
  @State() isMenuOpen = false;
  @State() pageClass: string;

  parseSection(path) {
    const match = /^(api|cli|native|pro)(\/.*)?/.exec(path);
    return match && match[1] || 'framework';
  }

  handleDocumentUpdate = (document) => {
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
                    onUpdate={this.handleDocumentUpdate}/>
                  <docs-preview url={this.previewUrl}/>
              </docs-content>
            </docs-layout>
          );
        }}/>
      </stencil-router>
    );
  }
}
