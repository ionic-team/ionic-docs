import { Component, State, Listen } from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'docs-root'
})
export class DocsRoot {
  contentElement: HTMLElement;

  @State() previewUrl: string;
  @State() previewCss: string;
  @State() isMenuOpen = false;

  @Listen('updatePreview')
  handleUpdatePreview(ev: any) {
    if (ev.detail.url) this.previewUrl = ev.detail.url;
    if (ev.detail.cssText) this.previewCss = ev.detail.cssText;
  }

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

          return (
            <docs-layout class={layoutClass}>
              <docs-menu section={section} path={props.match.url}/>
              <docs-header section={section} isMenuOpen={this.isMenuOpen} onToggleClick={this.toggleMenu}/>
              <docs-content
                ref={node => { this.contentElement = node; }}
                onOverlayClick={this.closeMenu}
                showOverlay={this.isMenuOpen}>
                  <docs-document path={documentPath} onLoaded={this.handleDocumentLoad}/>
                  <docs-preview url={this.previewUrl} cssText={this.previewCss}/>
              </docs-content>
            </docs-layout>
          );
        }}/>
      </stencil-router>
    );
  }
}
