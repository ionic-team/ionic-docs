import { Component, Element, JSX, Listen, Method, Prop, State, h } from '@stencil/core';

import { DownArrow } from '../../icons';

@Component({
  tag: 'docs-dropdown',
  styleUrl: 'dropdown.css'
})
export class DocsDropdown {
  @Prop() align: 'left' | 'right' | 'center' = 'left';
  @Prop() label!: string;
  @Prop() icon?: (props: any) => JSX.Element;
  @State() isOpen = false;
  @Element() el!: HTMLElement;

  @Listen('click', { target: 'window' })
  handleClick(event: MouseEvent) {
    const isNode = event.target instanceof Node;
    const isOurs = isNode && this.el.contains(event.target as Node);

    if (!isOurs) {
      this.close();
    }
  }

  @Listen('keyup')
  handleKeyup(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.toggle();
    }

    if (event.key === 'Escape') {
      this.close();
    }
  }

  @Method()
  async close() {
    this.isOpen = false;
  }

  @Method()
  async open() {
    this.isOpen = true;
  }

  @Method()
  async toggle() {
    this.isOpen = !this.isOpen;
  }

  hostData() {
    return {
      tabindex: '0',
      class: {
        'Dropdown': true,
        [`Dropdown--${this.align}`]: true,
        'is-open': this.isOpen
      }
    };
  }

  render() {
    const Icon = this.icon;
    const button = (
      <button
        tabindex="-1"
        class="Dropdown-button"
        aria-haspopup="menu"
        aria-expanded={this.isOpen ? 'true' : 'false'}
        onClick={this.toggle.bind(this)}
      >
        <span class="Dropdown-button-label">{this.label}</span>
        {Icon ? <Icon class="Dropdown-icon"/> : null}
        <DownArrow class="Dropdown-arrow"/>
      </button>
    );

    const panel = (
      <div
        role="menu"
        class="Dropdown-panel"
      >
        <slot/>
      </div>
    );

    return [
      button,
      panel
    ];
  }
}
