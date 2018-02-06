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
        <li class="forum">
          <a href="https://forum.ionicframework.com/"
             target="_blank">Forum</a>
        </li>
        <li class="chat">
          <a href="https://ionicworldwide.herokuapp.com/"
             target="_blank">Chat</a>
        </li>
        <li class="blog">
          <a href="https://blog.ionicframework.com/"
             target="_blank">Blog</a>
        </li>
        <li class="twitter">
          <a href="https://twitter.com/Ionicframework"
             target="_blank">Twitter</a>
        </li>
        <li class="stack-overflow">
          <a href="https://stackoverflow.com/questions/tagged/ionic-framework"
             target="_blank">Stack</a>
        </li>
        <li class="swag">
          <a href="https://shop.ionicframework.com/"
             target="_blank">Swag</a>
        </li>
      </ul>
    ]
  }
}