import { Component, State } from '@stencil/core';
import VersionDropdown from './version-dropdown';
import menuMap from './site-menu-map';

@Component({
  tag: 'site-menu',
  styleUrl: 'site-menu.scss'
})
export class SiteMenu {

  @State() version = '4.0.1';

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
      <li>
        <stencil-route-link exact url={url}>
          {text}
        </stencil-route-link>
      </li>
    )
  }

  createSubmenu(text: string, items: Object) {
    return (
      <li>
        <a onClick={e => this.toggleSubmenu(e.target as HTMLElement)}>{text}</a>
        <ul class="sub-menu">{this.createMenu(items)}</ul>
      </li>
    );
  }

  toggleSubmenu(toggle: HTMLElement) {
    toggle.nextElementSibling.classList.toggle('is-expanded');
  }

  render() {
    return [
      <VersionDropdown
        items={[ '4.0.1', '3.x', '2.x', '1.x' ]}
        onSelect={selected => { this.version = selected; }}/>,
      <nav class="menu-wrapper">
        <ul class="nested-menu">
          { this.createMenu(menuMap) }
        </ul>
      </nav>
    ];
  }
}





