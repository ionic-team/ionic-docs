import { Component } from '@stencil/core';

@Component({
  tag: 'command-output',
  styleUrl: 'command-output.scss',
})
export class CommandOutput {
  render() {
    return <slot />;
  }
}
