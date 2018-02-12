import { Component, State } from '@stencil/core';
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

  createVersionDropdown(dropdown) {
    return [
      <button class="current" onClick={dropdown.toggle}>v{dropdown.selected}</button>,
      <ul class={{ 'active': dropdown.isOpen }}>
        {dropdown.items.map(item =>
          <li
            class={{ 'active': dropdown.selected === item }}
            onClick={e => {
              e.preventDefault();
              dropdown.select(item);
              dropdown.close();
            }}>
            <a href="#">{item}</a>
          </li>
        )}
      </ul>
    ];
  }

  render() {
    return [
      <ctrl-dropdown
        class="version-dropdown"
        autoClose
        items={['4.0.1', '3.x', '2.x', '1.x']}
        onSelect={selected => { this.version = selected; }}
        renderer={this.createVersionDropdown}>
      </ctrl-dropdown>,
      <nav class="menu-wrapper">
        <ul class="nested-menu">
          { this.createMenu(menuMap) }
        </ul>
      </nav>
    ];
  }
}





