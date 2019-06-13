import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'docs-code',
  styleUrl: 'code.css'
})
export class DocsCode {
  @Prop({ reflectToAttr: true }) language = '';

  render() {
    return (
      <pre><code><slot/></code></pre>
    );
  }
}
