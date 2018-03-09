import { Component, Event, EventEmitter } from '@stencil/core';

import { CtrlDropdown } from '../ctrl-dropdown/ctrl-dropdown';

interface DropdownItem {
  title: string;
  subtitle: string;
  url: string;
  className: string;
  category?: string;
  small?: boolean;
}

const items: DropdownItem[] = [
  {
    title: 'Framework',
    subtitle: 'The UI Toolkit for building highly performant apps',
    url: '/docs',
    category: 'framework',
    className: 'framework'
  },
  {
    title: 'Pro',
    subtitle: 'Integrated suite of tools & services for shipping apps',
    url: '/docs/pro',
    category: 'pro',
    className: 'pro'
  },
  {
    title: 'CLI',
    subtitle: 'Ionic command line interface tool',
    url: '/docs/cli',
    category: 'cli',
    className: 'cli',
    small: true
  },
  {
    title: 'Capacitor',
    subtitle: 'Cross-platform Native SDK Container',
    url: 'https://capacitor.ionicframework.com/',
    className: 'capacitor',
    small: true
  },
  {
    title: 'Stencil',
    subtitle: 'Reusable web component compiler',
    url: 'https://stenciljs.com/',
    className: 'stencil',
    small: true
  }
];

@Component({
  tag: 'framework-dropdown',
  styleUrl: 'framework-dropdown.scss',
})
export class FrameworkDropdown {
  @Event({ eventName: 'docs-section-changed' }) sectionChanged: EventEmitter;

  itemClickHandler(event, dropdown: CtrlDropdown, item: DropdownItem) {
    if (item.category) {
      event.preventDefault();
      dropdown.select(item);
      this.sectionChanged.emit(item.category);
    }
  }

  render() {
    return (
      <ctrl-dropdown
        class="framework-dropdown"
        autoClose
        items={items}
        renderer={dropdown => [
          <a class="current" onClick={dropdown.toggle}>{dropdown.selected.title}</a>,
          <ul class={{ 'active': dropdown.isOpen }}>
            {dropdown.items.map(item =>
              <li class={{
                [item.className]: true,
                'active': dropdown.selected === item,
                'sm': item.small
              }}>
                <uber-link href={item.url} onClick={ e => this.itemClickHandler(e, dropdown, item) }>
                  <strong>{item.title}</strong>
                  <span>{item.subtitle}</span>
                </uber-link>
              </li>
            )}
          </ul>
        ]}>
      </ctrl-dropdown>
    );
  }
}
