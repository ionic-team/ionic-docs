import { Component, Listen, Method, Prop, State } from '@stencil/core';
import { DownArrow } from '../../icons';

@Component({
  tag: 'docs-dropdown',
  styleUrl: 'dropdown.css'
})
export class DocsDropdown {
  @Prop() align: 'left' | 'right' | 'center' = 'left';
  @Prop() label: string;
  @State() isOpen = false;

  @Listen('click')
  handleClick(event: MouseEvent) {
    event.stopPropagation();
  }

  @Listen('window:click')
  @Method()
  close() {
    this.isOpen = false;
  }

  @Method()
  open() {
    this.isOpen = true;
  }

  @Method()
  toggle() {
    this.isOpen = !this.isOpen;
  }

  hostData() {
    return {
      class: {
        'Dropdown': true,
        [`Dropdown--${this.align}`]: true,
        'is-open': this.isOpen
      }
    };
  }

  render() {
    const button = (
      <button
        class="Dropdown-button"
        onClick={this.toggle.bind(this)}>
        {this.label} <DownArrow/>
      </button>
    );

    const panel = (
      <div class="Dropdown-panel">
        <slot/>
      </div>
    );

    return [
      button,
      panel
    ];
  }
}
