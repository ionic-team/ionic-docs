import { Component, Prop } from '@stencil/core';
import { MenuItems } from '../../definitions';
import { Outbound } from '../../icons';
import { NavItem } from './nav-item';

@Component({
  tag: 'docs-nav',
  styleUrl: 'nav.css'
})
export class DocsNav {
  @Prop() items: MenuItems = {};

  toItem = ([text, value]) => {
    switch (typeof value) {
      case 'string':
        return <li key={text}>{this.toLink([text, value])}</li>;
      case 'object':
        return <li key={text}>{this.toSection([text, value])}</li>;
    }
  }

  toLink = ([text, url]) => {
    const isExternal = url.indexOf('http') === 0;

    if (isExternal) {
      return (
        <a
          href={url}
          class="outbound"
          target="_blank">
            {text} <Outbound/>
        </a>
      );
    }

    return (
      <stencil-route-link
        url={url}
        strict={false}
        exact>
          {text}
      </stencil-route-link>
    );
  }

  findHeaderLink = (value: string[]) => {
    return value.length && value[0] === 'item+default';
  }

  toSection = ([header, value]) => {
    let headerLink: string;
    if (value instanceof NavItem) {
      headerLink = value.defaultUrl;
      value = value.navItems;
    }
    const items = Array.isArray(value) ? value : Object.entries(value);
    return (
      <section>
        <header>{headerLink ? this.toLink([header, headerLink]) : header}</header>
        <ul>
          {items.map(this.toItem)}
        </ul>
      </section>
    );
  }

  render() {
    const items = Object.entries(this.items);
    return (
      <nav>
        <ul>
          {items.map(this.toItem)}
        </ul>
      </nav>
    );
  }
}
