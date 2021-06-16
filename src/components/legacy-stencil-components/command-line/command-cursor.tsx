import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'command-cursor',
  styleUrl: 'command-cursor.css',
})
export class CommandLineCursor {
  @Prop() blink!: boolean;

  hostData() {
    return {
      class: { blink: this.blink },
    };
  }

  render() {
    return '█';
  }
}
