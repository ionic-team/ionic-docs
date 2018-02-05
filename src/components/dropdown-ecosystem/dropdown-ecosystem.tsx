import { Component, State } from '@stencil/core';

@Component({
  tag: 'dropdown-ecosystem',
  styleUrl: 'dropdown-ecosystem.scss'
})
export class DropdownFramework {
  @State() active: boolean = false;

  constructor() {
    this.toggle = this.toggle.bind(this)
    this.clear = this.clear.bind(this)
  }

  toggle() {
    this.active = !this.active;
  }

  clear() {
    this.active = false;
  }

  render() {
    const dropdownClass = this.active ? 'active' : '';
    return [
      <a class="current" onClick={this.toggle}>Ecosystem</a>,
      <ul class={dropdownClass} onMouseLeave={this.clear}>

      </ul>
    ]
  }
}