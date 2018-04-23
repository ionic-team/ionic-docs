import { Component } from '@stencil/core';

@Component({
  tag: 'docs-layout',
  styleUrl: 'docs-layout.scss'
})
export class DocsLayout {
  render() {
    return <slot/>;
  }
}
