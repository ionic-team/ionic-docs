import { Component, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'menu-expander',
  styleUrl: 'menu-expander.scss'
})
export class MenuExpander {
  @Element() el: HTMLElement;

  @Prop() service: string;

  @State() isExpanded: boolean = false;

  target: Element;

  componentWillLoad() {
    const ul = this.el.nextElementSibling;
    this.target = ul;
  }

  handleOnClick() {
    if(!this.target) { return; }

    setTimeout(() => {
      this.target.classList.toggle('expanded');
    })
  }

  render() {
    return (
      <a onClick={this.handleOnClick.bind(this)}><slot /></a>
    )
  }
}