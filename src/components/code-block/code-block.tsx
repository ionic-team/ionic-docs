import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'code-block',
  styleUrl: 'code-block.scss'
})
export class CodeBlock {
  @Prop() language: string;

  render() {
    return [
      <div class="label">{this.language || ''}</div>,
      <div class="scroll-area"><pre><code><slot/></code></pre></div>
    ];
  }
}
