import { Component, State } from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'docs-root'
})
export class DocsRoot {
  contentElement: HTMLElement;

  @State() previewUrl: string;
  @State() isMenuOpen = false;

  parseSection(path) {
    const match = /^(api|cli|pro)(\/.*)?/.exec(path);
    return match && match[1] || 'framework';
  }

  handleDocumentLoad = (document) => {
    this.previewUrl = document.previewUrl || null;
    this.contentElement.scrollTop = 0;
    this.closeMenu();
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
            [`page-${page}`]: true
          };

          return [
            <docs-header isMenuOpen={this.isMenuOpen} onToggleClick={this.toggleMenu}/>,
            <docs-layout class={layoutClass}>
              <docs-menu section={section} path={props.match.url}/>
              <docs-content
                ref={node => { this.contentElement = node; }}
                onOverlayClick={this.closeMenu}
                showOverlay={this.isMenuOpen}>
                  <docs-document path={documentPath} onLoaded={this.handleDocumentLoad}/>
                  <docs-preview url={this.previewUrl}/>
              </docs-content>
            </docs-layout>
          ];
        }}/>
      </stencil-router>
    );
  }
}
