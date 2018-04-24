import { Component, State } from '@stencil/core';
import menuMap from './docs-menu-map';

@Component({
  tag: 'docs-menu',
  styleUrl: 'docs-menu.scss'
})
export class DocsMenu {
  @State() activeItem: string;

  createItem = (text, url, onClick?) => {
    return (
      <li>
        <stencil-route-link
          class="menu__item"
          onClick={onClick}
          activeClass="menu__item--active"
          url={url}
          exact>
            { text }
        </stencil-route-link>
      </li>
    );
  }

  createSubmenu = (text, items, onClick?) => {
    return (
      <li>
        <a class="menu__item" onClick={onClick}>{ text }</a>
        <ul class={{ 'menu__submenu': true, 'is-open': this.activeItem === text }}>
          { Object.keys(items).map(key => this.createItem(key, items[key]))}
        </ul>
      </li>
    );
  }

  setActiveItem(item) {
    this.activeItem = item;
  }

  render() {
    return [
      <div class="section-switch">Framework</div>,
      <nav class="menu">
        <ul>
          { Object.keys(menuMap).map(key => {
            const val = menuMap[key];
            const onClick = () => this.setActiveItem(key);
            const renderer = typeof val === 'string' ? this.createItem : this.createSubmenu;
            return renderer(key, val, onClick);
          })}
        </ul>
      </nav>
    ];
  }
}
