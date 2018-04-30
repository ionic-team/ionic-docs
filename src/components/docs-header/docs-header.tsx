import { Component, Prop } from '@stencil/core';
import { Close, Ionic, Menu } from '../../icons';

@Component({
  tag: 'docs-header',
  styleUrl: 'docs-header.scss'
})
export class DocsHeader {
  @Prop() isMenuOpen = false;
  @Prop() onToggleClick: () => void;

  render() {
    return (
      <nav>
        <button
          onClick={this.onToggleClick}
          class="menu-toggle">
            { this.isMenuOpen ? <Close/> : <Menu/> }
        </button>
        <a href="/docs" class="docs-logo"><Ionic/>Docs</a>
      </nav>
    );
  }
}
