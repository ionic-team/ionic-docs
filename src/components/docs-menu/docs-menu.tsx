import { Component } from '@stencil/core';
import menuMap from './docs-menu-map';

@Component({
  tag: 'docs-menu',
  styleUrl: 'docs-menu.scss'
})
export class DocsMenu {

  createItem = (text, url) => {
    return (
      <li>
        <stencil-route-link
          class="menu__item"
          activeClass="menu__item--active"
          url={url}
          exact>
            { text }
        </stencil-route-link>
      </li>
    );
  }

  createSubmenu = (text, items) => {
    return (
      <li>
        <a class="menu__item">{ text }</a>
        <ul class="menu__submenu">
          { Object.keys(items).map(key => this.createItem(key, items[key]))}
        </ul>
      </li>
    );
  }

  render() {
    return [
      <div class="section-switch">Framework</div>,
      <nav class="menu">
        <ul>
          { Object.keys(menuMap).map(key => {
            const val = menuMap[key];
            const renderer = typeof val === 'string' ? this.createItem : this.createSubmenu;
            return renderer(key, val);
          })}
        </ul>
      </nav>
    ];
  }
}
