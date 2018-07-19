import { Component, Element, Prop, State, Watch } from '@stencil/core';
import { RouterHistory, injectHistory } from '@stencil/router';
import { current, versions } from '../../versions';
import { apiMap } from './docs-api-map';
import { cliMenu } from './cli-menu';
import { nativeMenu } from './native-menu';
import * as menuMap from './docs-menu-map';
import { NewTab } from '../../icons';

@Component({
  tag: 'docs-menu',
  styleUrl: 'docs-menu.scss'
})
export class DocsMenu {
  @Element() el;
  @Prop() path: string;
  @Prop() history: RouterHistory;
  @Prop() section: string;
  @State() version = current;
  @State() activeItem: string;

  constructor() {
    this.onVersionChange = this.onVersionChange.bind(this);
  }

  createItem = (text, url, onClick?) => {
    return (
      <li>
        {url.indexOf('http') === 0 ?
          <span class="menu__item">
            <a href={url} target="_blank">
              { text }
              <NewTab/>
            </a>
          </span>
        :
          <stencil-route-link
            class="menu__item"
            onClick={onClick}
            activeClass="menu__item--active"
            url={url}
            strict={false}
            exact>
              { text }
          </stencil-route-link>
        }
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

  @Watch('path')
  setActiveItemFromPath(path) {
    const topLevelKeys = Object.keys(menuMap.main);
    const activeKey = topLevelKeys.find(key => {
      const items = menuMap.main[key];
      if (items === path) return true;
      return Object.keys(items).some(itemKey => items[itemKey] === path);
    });
    this.setActiveItem(activeKey);
  }

  onVersionChange(e) {
    this.version = (e.target as HTMLSelectElement).value;
    this.history.push(`/docs/api`, {});
  }

  componentDidLoad() {
    this.setActiveItemFromPath(this.path);
  }

  getMenuBySection(section) {
    switch (section) {

      case 'api':
        const api = apiMap[this.version];
        return [
          <div class="api-version-selector">
            <strong>API</strong>
            <label>
              { this.version }
              <select onChange={e => this.onVersionChange(e)}>
                { versions.map(version => (
                  <option value={version} selected={version === this.version}>{ version }</option>
                ))}
              </select>
              <svg viewBox="0 0 33 22"><polygon points="16.5 22 0 0 33 0"></polygon></svg>
            </label>
          </div>,
          <stencil-route-link class="menu__breadcrumb" url="/docs">
            <svg viewBox="0 0 16 24"><path d="M13 22L3 12 13 2" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
            Docs
          </stencil-route-link>,
          <ul>
            <li>
              <span class="menu__item menu__item--static">API Reference</span>
              <ul class="menu__submenu is-open">
                { Object.keys(api || {}).map(key => this.createItem(key, api[key]))}
              </ul>
            </li>
          </ul>
        ];

      case 'native':
        return [
          <stencil-route-link class="menu__breadcrumb" url="/docs">
            <svg viewBox="0 0 16 24"><path d="M13 22L3 12 13 2" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
            Docs
          </stencil-route-link>,
          <ul>
            <li>
              <span class="menu__item menu__item--static">Native APIs</span>
              <ul class="menu__submenu is-open">
                { Object.keys(nativeMenu).map(key => this.createItem(key, nativeMenu[key]))}
              </ul>
            </li>
          </ul>
        ];

      case 'cli':
        return [
          <stencil-route-link class="menu__breadcrumb" url="/docs">
            <svg viewBox="0 0 16 24"><path d="M13 22L3 12 13 2" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
            Docs
          </stencil-route-link>,
          <ul>
            <li>
              <span class="menu__item menu__item--static">CLI Commands</span>
              <ul class="menu__submenu is-open">
                { Object.keys(cliMenu).map(key => this.createItem(key, cliMenu[key]))}
              </ul>
            </li>
          </ul>
        ];

      case 'pro':
        return [
          <ul>
            { Object.keys(menuMap.pro).map(key => {
              const val = menuMap.pro[key];
              const onClick = () => this.toggleActiveItem(key);
              const renderer = typeof val === 'string' ? this.createItem : this.createSubmenu;
              return renderer(key, val, onClick);
            })}
          </ul>,
        ];
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
            <li style={{ marginTop: '1.5rem' }}>
              <stencil-route-link
                class="menu__item menu__item--outbound migration-pill"
                url="/docs/building/migration"
                exact>
                  v4 Migration Guide
                  <svg viewBox="0 0 16 24">
                    <path d="M3 2l10 10L3 22" stroke-width="3" fill="none" fill-rule="evenodd"/>
                  </svg>
              </stencil-route-link>
            </li>
          </ul>
        ];
    }
  }

  render() {
    return [
      <section-switch section={this.section}/>,
      <nav class="menu">{ this.getMenuBySection(this.section) }</nav>
    ];
  }
}

injectHistory(DocsMenu);
