import { Build, Component, Element, Prop, h } from '@stencil/core';
import { Outbound } from '../../icons';
import { MenuItems } from '../../definitions';
import { l10n } from '../../l10n';

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

  toItem = (item, level = 0) => {
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

  toLink = (item) => {
    const [id, href] = item;
    const text = l10n.getString(id) || id;
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

    const prefix = /^\/docs(\/[a-z]{2})?\//;
    const language = l10n.getLocale();
    const url = language !== 'en'
      ? `/docs/${language}/${href.replace(prefix, '')}`
      : href;

    return (
      <stencil-route-link
        url={url}
        strict={false}
        exact
        activeClass="Nav-link--active"
        anchorClass="Nav-link">
          <span>{text}</span>
      </stencil-route-link>
    );
  }

  toSection = ([id, value], level) => {
    const text = l10n.getString(id);
    const items = this.normalizeItems(value);
    return (
      <section>
        { id !== '' && text !== undefined ? <header class="Nav-header">{text}</header> : null }
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
      this.element.offsetParent ?
        this.element.offsetParent.scrollIntoView() :
        this.element.scrollIntoView();
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
