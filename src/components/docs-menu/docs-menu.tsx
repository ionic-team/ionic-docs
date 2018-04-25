import { Component, Prop, State } from '@stencil/core';
import { versions } from '../../versions';
import { apiMap } from './docs-api-map';
import * as menuMap from './docs-menu-map';

@Component({
  tag: 'docs-menu',
  styleUrl: 'docs-menu.scss'
})
export class DocsMenu {
  @Prop() section: string;
  @State() version = versions[0];
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

  toggleActiveItem(item) {
    if (this.activeItem === item) {
      this.activeItem = null;
      return;
    }
    this.setActiveItem(item);
  }

  getMenuBySection(section) {
    switch (section) {

      case 'api':
        const api = apiMap[this.version];
        return [
          <select class="api-version-selector" onChange={e => {
            this.version = (e.target as HTMLSelectElement).value;
          }}>
            { versions.map(version => (
              <option value={version} selected={version === this.version}>{ version }</option>
            ))}
          </select>,
          <stencil-route-link class="api-nav-breadcrumb" url="/docs">
            <svg viewBox="0 0 16 24"><path d="M13 22L3 12 13 2" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
            Docs
          </stencil-route-link>,
          <ul>
            <li>
              <span class="menu__item menu__item--static">API Reference</span>
              <ul class="menu__submenu is-open">
                { Object.keys(api).map(key => this.createItem(key, api[key]))}
              </ul>
            </li>
          </ul>
        ];

      case 'pro':
      case 'cli':
      case 'framework':
      default:
        return [
          <ul>
            { Object.keys(menuMap.main).map(key => {
              const val = menuMap.main[key];
              const onClick = () => this.toggleActiveItem(key);
              const renderer = typeof val === 'string' ? this.createItem : this.createSubmenu;
              return renderer(key, val, onClick);
            })}
          </ul>,
          <ul>
            { Object.keys(menuMap.outbound).map(key => {
              const onClick = () => this.setActiveItem(null);
              return this.createOutboundItem(key, menuMap.outbound[key], onClick);
            })}
          </ul>
        ];
    }
  }

  render() {
    return [
      <div class="section-switch">Framework</div>,
      <nav class="menu">{ this.getMenuBySection(this.section) }</nav>
    ];
  }
}
