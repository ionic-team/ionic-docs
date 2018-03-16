import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'code-block',
  styleUrl: 'code-block.css'
})
export class CodeBlock {
  @Prop() language: string;

  render() {
    return [
      <div class="label">{this.language || ''}</div>,
      <pre><code><slot/></code></pre>
    ];
  }
}
