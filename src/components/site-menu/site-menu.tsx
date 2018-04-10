import { Component, Prop, State } from '@stencil/core';
import VersionDropdown from './version-dropdown';
import menuMap from './site-menu-map';
import { versions } from '../../versions';

@Component({
  tag: 'site-menu',
  styleUrl: 'site-menu.scss'
})
export class SiteMenu {

  @Prop() onNavigate: () => void;
  @Prop() isOpen: boolean;
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

  hostData() {
    return {
      'class': { 'is-open': this.isOpen }
    };
  }

  render() {
    return [
      <VersionDropdown
        items={versions}
        onSelect={selected => { this.version = selected; }}/>,
      <nav class="menu-wrapper">
        <ul class="nested-menu">
          { this.createMenu(menuMap, true) }
        </ul>
      </nav>
    ];
  }
}
