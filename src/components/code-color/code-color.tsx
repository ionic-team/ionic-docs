import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'code-color',
  styleUrl: 'code-color.css'
})
export class ColorBlock {
  @Prop() value!: string;
  @Prop() mode!: string;
  @Prop() display?: string;

  render() {
    const display = this.display === undefined ? this.value.trim() : this.display.trim();

    return [
      <span
        class="code-color-block"
        style={{
          'background-color': this.value
        }}
      />,
      <code class="code-color-value">{display}</code>
    ];
  }
}
