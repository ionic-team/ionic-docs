import { Component, Prop, State } from '@stencil/core';
import * as menuMap from './site-menu-map';
import { versions } from '../../versions';

@Component({
  tag: 'site-menu',
  styleUrl: 'site-menu.scss'
})
export class SiteMenu {

  @Prop() onNavigate: () => void;
  @Prop() isOpen: boolean;
  @State() isSwitcherOpen = false;
  @State() activeItem: string;
  @State() version = versions[versions.length - 1];

  createMenu(items, isTopLevel: boolean) {
    return Object.keys(items).map(key => {
      const val = items[key];
      switch (typeof val) {
        case 'object':
          return this.createSubmenu(key, val);
        case 'function':
          return this.createSubmenu(key, val(this.version));
        default:
          return this.createMenuItem(key, val, isTopLevel);
      }
    });
  }

  createMenuItem(text: string, url: string, isTopLevel: boolean) {
    return (
      <li role="none">
        <stencil-route-link exact url={url}
          onClick={() => this.handleNavigate(text, isTopLevel)}
          anchor-title={text}
          anchor-role="menuitem">
          {text}
        </stencil-route-link>
      </li>
    );
  }

  createSubmenu(text: string, items: Object) {
    const isActive = text === this.activeItem;
    return (
      <li role="none">
        <a onClick={() => this.setActiveItem(text)}
           title={text}
           role="menuitem"
           aria-expanded={isActive}>
          {text}
        </a>
        <ul class={{ 'sub-menu': true, 'expanded': isActive }}
            role="menu"
            aria-hidden={isActive}
            aria-label={text}>
          {this.createMenu(items, false)}
        </ul>
      </li>
    );
  }

  handleNavigate = (text, isTopLevel) => {
    if (isTopLevel) this.setActiveItem(text);
    this.onNavigate();
  }

  setActiveItem(text: string) {
    this.activeItem = this.activeItem === text ? null : text;
  }

  toggleSwitcher = () => {
    this.isSwitcherOpen = !this.isSwitcherOpen;
  }

  render() {
    return [
      <div class="section-switcher">
        <a class="section-switcher__toggle" onClick={this.toggleSwitcher}>
          Framework
          <svg viewBox="0 0 33 22"><polygon points="16.5 22 0 0 33 0"></polygon></svg>
        </a>
        <ul class={{ 'section-switcher__list': true, 'is-open': this.isSwitcherOpen }}>
          <li><stencil-route-link url="/docs/pro">Pro</stencil-route-link></li>
          <li><stencil-route-link url="/docs/cli">CLI</stencil-route-link></li>
        </ul>
      </div>,
      <nav>
        <ul>{ this.createMenu(menuMap.main, true) }</ul>
        <ul class="external">{ this.createMenu(menuMap.secondary, true) }</ul>
      </nav>
    ];
  }
}
