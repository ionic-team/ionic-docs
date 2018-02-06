import { Component } from '@stencil/core';
import menuItems from './site-menu-items';

@Component({
  tag: 'site-menu',
  styleUrl: 'site-menu.scss'
})
export class SiteMenu {
  createMenu(items) {
    return Object.keys(items).map(key =>
      typeof items[key] === 'object'
        ? this.createSubmenu(key, items[key])
        : this.createMenuItem(key, items[key])
    );
  }

  createMenuItem(text: string, url: string) {
    return (
      <li>
        <stencil-route-link url={url}>
          {text}
        </stencil-route-link>
      </li>
    )
  }

  createSubmenu(text: string, items: Object) {
    return (
      <li>
        <menu-expander>{text}</menu-expander>
        <ul>{this.createMenu(items)}</ul>
      </li>
    );
  }

  render() {
    return (
      <nav class="menu-wrapper">
        <ul class="nested-menu">
          { this.createMenu(menuItems) }
        </ul>
      </nav>
    );
  }
}






