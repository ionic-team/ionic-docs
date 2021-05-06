import { Component, h } from '@stencil/core';

@Component({
  tag: 'command-prompt',
  styleUrl: 'command-prompt.css',
})
export class CommandPrompt {
  render() {
    return <slot />;
  }
}
