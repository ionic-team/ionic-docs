import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'menu-expander',
  styleUrl: 'menu-expander.scss'
})
export class MenuExpander {
  @Element() el: HTMLElement;

  // doesn't serve a purpose anymore but kept around for backwards compatibility
  @Prop() service: string;

  handleOnClick() {
    this.el.classList.toggle('expanded');
  }

  render() {
    return (
      <a onClick={this.handleOnClick.bind(this)}><slot /></a>
    )
  }
}
