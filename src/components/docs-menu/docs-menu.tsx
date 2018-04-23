import { Component } from '@stencil/core';

@Component({
  tag: 'docs-menu',
  styleUrl: 'docs-menu.scss'
})
export class DocsMenu {
  render() {
    return [
      <div class="section-switch">Framework</div>,
      <nav class="menu">Menu</nav>
    ];
  }
}
