import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'command-cursor',
  styleUrl: 'command-cursor.scss',
})
export class CommandLine {
  @Prop() blink: boolean;

  hostData() {
    return {
      class: { blink: this.blink },
    };
  }

  render() {
    return '█';
  }
}
