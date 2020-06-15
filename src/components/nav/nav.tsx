import { Build, Component, Element, Prop, h } from '@stencil/core';

import { MenuItem, MenuItems } from '../../definitions';
import { l10n } from '../../l10n';

import { link } from './link';

@Component({
  tag: 'docs-nav',
  styleUrl: 'nav.css'
})
export class DocsNav {
  @Element() el!: HTMLElement;
  @Prop() items!: MenuItems;

  private normalizeItems(items: MenuItems | MenuItem[]): any[] {
    return Array.isArray(items) ? items : Object.entries(items);
  }

  toLink = link;

  toItem = (item: any, level = 0) => {
    const [id, value] = item;
    switch (typeof value) {
      case 'string':
        // Go ahead...git blame...I know you want TWO :-)
        if (id.match(/menu-native-[ce]e-show-all/)) {
         return <li style={{ 'font-style': 'italic' }} key={item}>{this.toLink(item)}</li>;
        }
        return <li key={item}>{this.toLink(item)}</li>;
      case 'object':
        return <li key={item}>{this.toSection(item, level + 1)}</li>;
      default:
        return null;
    }
  }

  toSection = ([id, value]: [string, MenuItems], level: number) => {
    const text = l10n.getString(id);
    const items = this.normalizeItems(value);
    return (
      <section>
        {id !== '' && text !== undefined ? <header class="Nav-header">{text}</header> : null}
        <ul
          class="Nav-subnav"
          style={{ '--level': `${level}` }}
        >
          {items.map(item => this.toItem(item, level))}
        </ul>
      </section>
    );
  }

  setScroll = () => {
    const activeLink = this.el.querySelector('.Nav-link--active');

    if (activeLink) {
      activeLink.scrollIntoView({
        block: 'center'
      });
    } else {
      this.el.offsetParent ?
      this.el.offsetParent.scrollIntoView() :
      this.el.scrollIntoView();
    }
  }

  componentDidLoad() {
    if (Build.isBrowser) {
      requestAnimationFrame(this.setScroll);
    }
  }

  hostData() {
    return {
      'role': 'navigation'
    };
  }

  render() {
    return (
      <ul class="Nav">
        {this.normalizeItems(this.items).map(item => this.toItem(item))}
      </ul>
    );
  }
}
