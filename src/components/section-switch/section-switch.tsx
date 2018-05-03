import { Component, Prop } from '@stencil/core';
import { Ionic } from '../../icons';

@Component({
  tag: 'section-switch',
  styleUrl: 'section-switch.scss'
})
export class SectionSwitch {
  @Prop() section: string;

  renderSelector(dropdown) {
    const activeItem = dropdown.items.find(item => item.sections.includes(this.section));
    const selected = activeItem ? activeItem.title : 'Framework';
    return (
      <div class={{ 'section-switch__selector': true, 'is-open': dropdown.isOpen }}>
        <a class="section-switch__logo" href="/docs">
          <Ionic/>
          <span>Docs</span>
        </a>
        <span class="section-switch__selected" onClick={dropdown.toggle}>
          { selected }
          <svg viewBox="0 0 33 22"><polygon points="16.5 22 0 0 33 0"></polygon></svg>
        </span>
      </div>
    );
  }

  renderPanel(dropdown) {
    return (
      <ul class={{ 'section-switch__panel': true, 'is-open': dropdown.isOpen }}>
        { dropdown.items.map(item => {
          const isActive = item.sections.includes(this.section);
          const onClick = dropdown.close;
          return (
            <li class={{
              'section-switch__item': true,
              'section-switch__item--outbound': item.outbound,
              'section-switch__item--active': isActive
            }}>{ this.renderItem({ ...item, isActive, onClick }) }</li>
          );
        })}
      </ul>
    );
  }

  renderItem(item) {
    if (item.outbound) {
      return (
        <a href={item.url} target="_blank" onClick={item.onClick}>{ item.title }</a>
      );
    }

    return (
      <stencil-route-link url={item.url} onClick={item.onClick}>{ item.title }</stencil-route-link>
    );
  }

  render() {
    return (
      <ctrl-dropdown
        class="section-switch"
        autoClose
        items={options}
        renderer={dropdown => [
          this.renderSelector(dropdown),
          this.renderPanel(dropdown)
        ]}/>
    );
  }
}

const options = [
  {
    title: 'Framework',
    url: '/docs',
    sections: ['framework', 'api']
  },
  {
    title: 'Pro',
    url: '/docs/pro',
    sections: ['pro']
  },
  {
    title: 'CLI',
    url: '/docs/cli',
    sections: ['cli']
  },
  {
    title: 'Stencil',
    url: 'https://stenciljs.com',
    sections: [],
    outbound: true
  },
  {
    title: 'Capacitor',
    url: 'https://capacitor.ionicframework.com/',
    sections: [],
    outbound: true
  }
];
