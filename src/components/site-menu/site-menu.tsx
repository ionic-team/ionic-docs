import { Component, Listen, State } from '@stencil/core';
import menuMap from './site-menu-map';

@Component({
  tag: 'site-menu',
  styleUrl: 'site-menu.scss'
})
export class SiteMenu {


  @State() version: string = '4.0.1';

  constructor() {
    this.handleVersionChange = this.handleVersionChange.bind(this);
  }

  @Listen('versionSelectionChange')
  handleVersionChange(version) {
    this.version = version;
  }

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

  render() {
    return [
      <dropdown-version version={this.version}>
      </dropdown-version>,
      <nav class="menu-wrapper">
        <ul class="nested-menu">
          { this.createMenu(menuMap) }
        </ul>
      </nav>
    ];
  }
}






