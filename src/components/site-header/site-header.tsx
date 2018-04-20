import { Component, Prop } from '@stencil/core';
import { SECTION_FRAMEWORK, SECTION_CLI } from '../../constants';
import { Close, Ionic, Menu } from '../../icons';

@Component({
  tag: 'site-header',
  styleUrl: 'site-header.scss'
})
export class SiteHeader {
  @Prop() currentSection: string;
  @Prop() onToggleClick: () => void;
  @Prop() isMenuOpen: boolean;

  renderGithubLink() {
    switch (this.currentSection) {
      case SECTION_FRAMEWORK:
        return (
          <a href="https//github.com/ionic-team/ionic" class="github" target="_blank">
            GitHub<new-tab-icon class="on-blue"/>
          </a>
        );
      case SECTION_CLI:
        return (
          <a href="https://github.com/ionic-team/ionic-cli" class="github" target="_blank">
            GitHub<new-tab-icon/>
          </a>
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <nav>
        <button
          onClick={this.onToggleClick}
          class={{ 'site-nav-toggle': true, 'is-open': this.isMenuOpen }}>
            { this.isMenuOpen ? <Close/> : <Menu/> }
        </button>
        <a href="/docs" id="site-logo"><Ionic/></a>
        <framework-dropdown/>
        <site-search/>
        <ecosystem-dropdown/>
        { this.renderGithubLink() }
      </nav>
    );
  }
}
