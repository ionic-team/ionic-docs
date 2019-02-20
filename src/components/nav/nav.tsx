import { Component, Element, Prop } from '@stencil/core';
import { Outbound } from '../../icons';
import { MenuItems } from '../../definitions';

@Component({
  tag: 'docs-nav',
  styleUrl: 'nav.css'
})
export class DocsNav {
  @Element() element: HTMLElement;
  @Prop() items: MenuItems;

  private normalizeItems(items) {
    return Array.isArray(items) ? items : Object.entries(items);
  }

  private isExternalLink(href: string) {
    return href.indexOf('http') === 0;
  }

  toItem = (item, level) => {
    const [, value] = item;
    switch (typeof value) {
      case 'string':
        return <li key={item}>{this.toLink(item)}</li>;
      case 'object':
        return <li key={item}>{this.toSection(item, level + 1)}</li>;
      default:
        return null;
    }
  }

  toLink = (item) => {
    const [text, href] = item;
    const isExternal = this.isExternalLink(href);

    if (isExternal) {
      return (
        <a href={href}
          target="_blank"
          class="Nav-link outbound">
            <span>{text}</span> <Outbound/>
        </a>
      );
    }

    return (
      <stencil-route-link
        url={href}
        strict={false}
        exact
        activeClass="Nav-link--active"
        anchorClass="Nav-link">
          <span>{text}</span>
      </stencil-route-link>
    );
  }

  toSection = ([text, value], level) => {
    const items = this.normalizeItems(value);
    return (
      <section>
        <header class="Nav-header">{text}</header>
        <ul
          class="Nav-subnav"
          style={{ '--level': level }}>
            {items.map(item => this.toItem(item, level))}
        </ul>
      </section>
    );
  }

  setScroll = () => {
    try {
      this.element.querySelector('.Nav-link--active')
        .scrollIntoView({
          block: 'center'
        });
    } catch (err) {
      this.element.scrollIntoView();
    }
  }

  componentDidLoad() {
    requestAnimationFrame(this.setScroll);
  }

  hostData() {
    return {
      'role': 'navigation'
    };
  }

  render() {
    return (
      <ul class="Nav">
        {this.normalizeItems(this.items).map(item => this.toItem(item, 1))}
      </ul>
    );
  }
}
