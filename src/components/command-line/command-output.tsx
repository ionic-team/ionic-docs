import { Component, h } from '@stencil/core';

@Component({
  tag: 'command-output',
  styleUrl: 'command-output.css',
})
export class CommandOutput {
  render() {
    return <slot />;
  }
}
