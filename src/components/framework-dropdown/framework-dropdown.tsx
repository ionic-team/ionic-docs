import { Component, State } from '@stencil/core';

@Component({
  tag: 'framework-dropdown',
  styleUrl: 'framework-dropdown.scss'
})
export class FrameworkDropdown {
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
      <a class="current" onClick={this.toggle}>Framework</a>,
      <ul class={dropdownClass} onMouseLeave={this.clear}>
        <li class="framework active">
          <a href="/docs">
            <strong>Framework Docs</strong>
            <span>The UI Toolkit for building highly performant apps</span>
          </a>
        </li>
        <li class="pro">
          <a href="/docs/pro">
            <strong>Pro Docs</strong>
            <span>Integrated suite of tools &amp; services for shipping apps</span>
          </a>
        </li>
        <li class="cli sm">
          <a href="/docs/cli">
            <strong>CLI</strong>
            <span>Ionic command line interface tool</span>
          </a>
        </li>
        <li class="capacitor sm">
          <a href="" target="_blank">
            <strong>Capacitor</strong>
            <span>Cross-platform Native SDK Container</span>
          </a>
        </li>
        <li class="stencil sm">
          <a href="https://stenciljs.com" target="_blank">
            <strong>Stencil</strong>
            <span>Reusable web component compiler</span>
          </a>
        </li>
      </ul>
    ]
  }
}