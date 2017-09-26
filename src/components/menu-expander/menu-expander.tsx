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

  componentDidLoad() {
    const ul = this.el.nextElementSibling;
    ul.classList.add('collapsed');
    this.target = ul;
  }

  handleOnClick(e) {
    if(!this.target) { return; }

    setTimeout(() => {
      this.target.classList.toggle('collapsed');
    })
  }

  render() {
    return (
      <div onClick={this.handleOnClick.bind(this)}>
        <div class={`pro-icon pro-icon-${this.service}`}></div>
        <a><slot /></a>
      </div>
    )
  }
}