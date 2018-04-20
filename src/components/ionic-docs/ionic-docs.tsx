import '@stencil/router';
import { Component, State } from '@stencil/core';

@Component({
  tag: 'ionic-docs',
  styleUrl: 'ionic-docs.scss'
})
export class IonicDocs {
  @State() showPreview: boolean;
  @State() isMenuOpen = false;

  parsePage(path) {
    return path.replace(/\//g, '-');
  }

  parseSection(path) {
    const match = /^(api|cli|pro)(\/.*)?/.exec(path);
    const section = match && match[1] || 'framework';
    return section;
  }

  toggleMenu = () => {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu = () => {
    this.isMenuOpen = false;
  }

  hostData() {
    return {
      'class': { 'is-menu-open': this.isMenuOpen }
    };
  }

  render() {
    return (
      <stencil-router>
        <stencil-route url={['/docs/:docPath*', '/docs']} routeRender={({ match }) => {
          const path = match.params.docPath || 'index';
          const page = this.parsePage(path);
          const section = this.parseSection(path);
          const pageClass = {
            'layout': true,
            'show-preview': this.showPreview,
            'is-menu-open': this.isMenuOpen,
            [`page-${page}`]: true,
            [`section-${section}`]: true
          };

          return (
            <div class={pageClass}>
              <site-header
                currentSection={section}
                isMenuOpen={this.isMenuOpen}
                onToggleClick={this.toggleMenu}/>
              <site-menu
                onNavigate={this.closeMenu}
                isOpen={this.isMenuOpen}/>
              <site-content
                docPath={path}
                onOverlayClick={this.closeMenu}
                isMenuOpen={this.isMenuOpen}/>
              <site-preview-app/>
            </div>
          );
        }}/>
      </stencil-router>
    );
  }
}
