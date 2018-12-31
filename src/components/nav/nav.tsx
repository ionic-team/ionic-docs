import { Component, Prop } from '@stencil/core';
import { MenuItems } from '../../definitions';

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
          class="outbound-link"
          target="_blank">
            {text}
            <NewTabIcon/>
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
        <header>{header} <CollapsibleIcon/></header>
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

const CollapsibleIcon = () => (
  <svg viewBox="0 0 512 512">
    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"/>
  </svg>
);

const NewTabIcon = () => (
  <svg viewBox="0 0 512 512">
    <path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z"/>
  </svg>
);
