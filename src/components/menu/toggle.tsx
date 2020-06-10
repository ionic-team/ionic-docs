import { Component, h } from '@stencil/core';

import { Menu } from '../../icons';

@Component({
  tag: 'docs-menu-toggle',
  styleUrl: 'toggle.css'
})
export class DocsMenuToggle {
  hostData() {
    return {
      role: 'button',
      tabindex: '0',
      'aria-label': 'Toggle Menu'
    };
  }

  render() {
    return <Menu/>;
  }
}
