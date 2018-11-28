import { Component, State } from '@stencil/core';

/* tslint:disable:no-import-side-effect */
import '@stencil/router';
import 'intersection-observer';
/* tslint:enable:no-import-side-effect */

@Component({
  tag: 'docs-root'
})
export class DocsRoot {
  document: HTMLElement;

  @State() previewUrl: string;
  @State() previewSource: string;
  @State() isMenuOpen = false;
  @State() pageClass: string;

  parseSection(path) {
    const match = /^(api|cli|native|pro)(\/.*)?/.exec(path);
    return match && match[1] || 'framework';
  }

  handleDocumentUpdate = (document) => {
    this.previewUrl = document.previewUrl || null;
    this.previewSource = document.previewSource || null;
    this.pageClass = document.pageClass;
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

  componentDidUpdate() {
    this.setScrollPosition();
  }

  render() {
    return (
      <stencil-router>
        <stencil-route url={['/docs/:document*', '/docs/']} routeRender={props => {
          const documentPath = props.match.params.document || 'index';
          const section = this.parseSection(documentPath);
          const layoutClass = {
            ['is-menu-open']: this.isMenuOpen,
            [`section-${section}`]: true,
            [`page-${this.pageClass || documentPath.replace(/\//g, '')}`]: true
          };

          return (
            <docs-layout class={layoutClass}>
              <docs-menu section={section} path={props.match.url}/>
              <docs-header section={section}
                           isMenuOpen={this.isMenuOpen}
                           onToggleClick={this.toggleMenu}/>
              <docs-content
                onOverlayClick={this.closeMenu}
                showOverlay={this.isMenuOpen}>
                  <docs-document
                    ref={node => { this.document = node; }}
                    path={documentPath}
                    onUpdate={this.handleDocumentUpdate}/>
                  <docs-preview url={this.previewUrl}
                                source={this.previewSource}/>
              </docs-content>
            </docs-layout>
          );
        }}/>
      </stencil-router>
    );
  }
}
