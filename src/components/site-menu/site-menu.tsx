import { Component, Element, State } from '@stencil/core';
import VersionDropdown from './version-dropdown';
import menuMap from './site-menu-map';
import { versions } from '../../versions';

@Component({
  tag: 'site-menu',
  styleUrl: 'site-menu.css'
})
export class SiteMenu {

  @Element() el: Element;
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
        <stencil-route-link exact url={url}
          anchor-title={text}
          anchor-role="menuitem">
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
            aria-hidden="true"
            aria-label={text}>
          {this.createMenu(items)}
        </ul>
      </li>
    );
  }

  toggleSubmenu(toggle: HTMLElement) {
    [].forEach.call(this.el.querySelectorAll('a[aria-expanded="true"]'), el => {
      if (el !== toggle && el.getAttribute('aria-expanded') === 'true') {
        el.setAttribute('aria-expanded', 'false');
        const list = el.nextElementSibling;
        list.setAttribute('aria-hidden', 'true');
        list.classList.remove('expanded');
      }
    });

    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');

    const currentList = toggle.nextElementSibling;
    currentList.setAttribute('aria-hidden', expanded ? 'true' : 'false');
    currentList.classList.toggle('expanded');
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





