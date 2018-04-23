import { Component } from '@stencil/core';

@Component({
  tag: 'docs-content',
  styleUrl: 'docs-content.scss'
})
export class DocsContent {
  render() {
    return <slot/>;
  }
}
