import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'command-line',
  styleUrl: 'command-line.css'
})
export class CommandLine {
  @Prop({ reflect: true }) nobuttons?: boolean;

  renderButtons() {
    return (
      <svg viewBox="0 0 400 100">
        <circle r="50" cx="50" cy="50" />
        <circle r="50" cx="200" cy="50" />
        <circle r="50" cx="350" cy="50" />
      </svg>
    );
  }

  render() {
    return [
      this.nobuttons ? null : this.renderButtons(),
      <slot />
    ];
  }
}
