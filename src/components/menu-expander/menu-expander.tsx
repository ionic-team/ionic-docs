import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'menu-expander',
  styleUrl: 'menu-expander.scss'
})
export class MenuExpander {
  @Prop() service: string;

  render() {
    return (
    <div>
      <div class={`pro-icon pro-icon-${this.service}`}></div>
      <a><slot /></a>
    </div>)
  }
}