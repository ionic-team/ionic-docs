import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'docs-code',
  styleUrl: 'code.css'
})
export class DocsCode {
  @Prop({ reflectToAttr: true }) language = '';

  render() {
    return (
      <pre data-language={this.language}><code><slot/></code></pre>
    );
  }
}
