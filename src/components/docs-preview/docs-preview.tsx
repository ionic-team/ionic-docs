import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'docs-preview',
  styleUrl: 'docs-preview.scss'
})
export class DocsPreview {
  @Prop() url: string;

  hostData() {
    return {
      'class': {
        'is-active': typeof this.url === 'string'
      }
    };
  }

  render() {
    return <div>{ this.url }</div>;
  }
}
