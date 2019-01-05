import { Component, Prop } from '@stencil/core';
import { MenuItems } from '../../definitions';
import { Outbound } from '../../icons';

@Component({
  tag: 'docs-nav',
  styleUrl: 'nav.css'
})
export class DocsNav {
  @Prop() items: MenuItems;

  toItem = ([text, value]) => {
    switch (typeof value) {
      case 'string':
        return <li>{this.toLink([text, value])}</li>;
      case 'object':
        return <li>{this.toSection([text, value])}</li>;
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
        exact>
          {text}
      </stencil-route-link>
    );
  }

  toSection = ([header, value]) => {
    const { __class, ...items } = value;
    return (
      <section class={__class}>
        <header>{header}</header>
        <ul>
          {Object.entries(items).map(this.toItem)}
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
