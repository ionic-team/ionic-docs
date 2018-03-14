import { Component, State } from '@stencil/core';
import VersionDropdown from './version-dropdown';
import menuMap from './site-menu-map';
import { versions } from '../../versions';

@Component({
  tag: 'site-menu',
  styleUrl: 'site-menu.scss'
})
export class SiteMenu {

  @State() version = versions[versions.length - 1];

  createMenu(items) {
    return Object.keys(items).map(key => {
      const val = items[key];
      switch (typeof val) {
        case 'object':
          return this.createSubmenu(key, val);
        case 'function':
          return this.createSubmenu(key, val(this.version));
        default:
          return this.createMenuItem(key, val);
      }
    });
  }

  createMenuItem(text: string, url: string) {
    return (
      <li role="none">
        <stencil-route-link exact url={url} title={text} role="menuitem">
          {text}
        </stencil-route-link>
      </li>
    );
  }

  createSubmenu(text: string, items: Object) {
    return (
      <li role="none">
        <a onClick={e => this.toggleSubmenu(e.target as HTMLElement)}
           title={text}
           role="menuitem"
           aria-expanded="false">
          {text}
        </a>
        <ul class="sub-menu"
            role="menu"
            aria-label={text}>
          {this.createMenu(items)}
        </ul>
      </li>
    );
  }

  toggleSubmenu(toggle: HTMLElement) {
    const expanded = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', expanded ? 'true' : 'true');
    toggle.nextElementSibling.classList.toggle('expanded');
  }

  render() {
    return [
      <VersionDropdown
        items={versions}
        onSelect={selected => { this.version = selected; }}/>,
      <nav class="menu-wrapper">
        <ul class="nested-menu">
          { this.createMenu(menuMap) }
        </ul>
      </nav>
    ];
  }
}





