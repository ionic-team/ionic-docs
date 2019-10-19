import { Component, h } from '@stencil/core';

@Component({
  tag: 'docs-cards',
  styleUrl: 'cards.css'
})
export class DocsCards {
  render() {
    return <slot/>;
  }
}
