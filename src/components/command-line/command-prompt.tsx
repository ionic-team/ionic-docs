import { Component } from '@stencil/core';

@Component({
  tag: 'command-prompt',
  styleUrl: 'command-prompt.scss',
})
export class CommandPrompt {
  render() {
    return <slot />;
  }
}
