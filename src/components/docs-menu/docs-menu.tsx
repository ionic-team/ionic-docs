import { Component, State } from '@stencil/core';
import * as menuMap from './docs-menu-map';

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

  createOutboundItem = (text, url, onClick?) => {
    return (
      <li>
        <stencil-route-link
          class="menu__item menu__item--outbound"
          onClick={onClick}
          url={url}
          exact>
            { text }
            <svg viewBox="0 0 16 24">
              <path d="M3 2l10 10L3 22" stroke-width="3" fill="none" fill-rule="evenodd"/>
            </svg>
        </stencil-route-link>
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
          { Object.keys(menuMap.main).map(key => {
            const val = menuMap.main[key];
            const onClick = () => this.setActiveItem(key);
            const renderer = typeof val === 'string' ? this.createItem : this.createSubmenu;
            return renderer(key, val, onClick);
          })}
        </ul>
        <ul>
          { Object.keys(menuMap.outbound).map(key => {
            const onClick = () => this.setActiveItem(null);
            return this.createOutboundItem(key, menuMap.outbound[key], onClick);
          })}
        </ul>
      </nav>
    ];
  }
}
