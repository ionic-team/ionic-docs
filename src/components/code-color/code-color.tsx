import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'code-color',
  styleUrl: 'code-color.css'
})
export class ColorBlock {
  @Prop() value: string;

  render() {
    return [
      <span
        class="color-block"
        style={{
          'background-color': this.value
        }}>
      </span>,
      <code class="color-code">{ this.value.trim() }</code>
    ];
  }
}
