import { Component, h } from '@stencil/core';

@Component({
  tag: 'docs-item-list',
  styleUrl: 'item-list.css'
})
export class DocsItemList {
  render() {
    return <slot/>;
  }
}
