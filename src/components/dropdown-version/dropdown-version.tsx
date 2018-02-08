import { Component, Event, EventEmitter, Prop, State } from '@stencil/core';

@Component({
  tag: 'dropdown-version',
  styleUrl: 'dropdown-version.scss'
})
export class DropdownVersion {
  @State() active: boolean = false;
  @Prop() version: string = '4.0.1';
  @Event() versionSelectionChange: EventEmitter;


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
      <button class="current" onClick={this.toggle}>v{this.version}</button>,
      <ul class={dropdownClass} onMouseLeave={this.clear}>
        <li class="active"><a href="/docs/api">{this.version} (current)</a></li>
        <li><a href="/docs/3.9.2/api">3.x</a></li>
        <li><a href="/docs/2.3.0/api">3.x</a></li>
        <li><a href="/docs/v1/api">1.x</a></li>
      </ul>
    ]
  }
}