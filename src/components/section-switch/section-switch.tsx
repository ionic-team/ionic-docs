import { Component, Prop } from '@stencil/core';
import { Arrow, Checkmark, Ionic, NewTab } from '../../icons';

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
        <a class="section-switch__logo" href="/docs/">
          <Ionic/>
          <span>Docs</span>
        </a>
        <span class="section-switch__selected" onClick={dropdown.toggle}>
          { selected }
          <Arrow />
        </span>
        <span class="section-switch__badge">v4 BETA</span>
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
        <a href={item.url} target="_blank" onClick={item.onClick}>
          <strong class="section-switch__title">{ item.title }</strong>
          <span class="section-switch__subtitle">{ item.subtitle }<NewTab/></span>
        </a>
      );
    }

    return (
      <stencil-route-link url={item.url} onClick={item.onClick}>
        <div>
          <strong class="section-switch__title">{ item.title }</strong>
          <span class="section-switch__subtitle">{ item.subtitle }</span>
        </div>
        <div class="section-switch__active-icon">
          { item.isActive ? <Checkmark/> : null }
        </div>
      </stencil-route-link>
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
    subtitle: 'The UI Toolkit for building highly performant apps',
    url: '/docs/',
    sections: ['framework', 'api', 'cli']
  },
  {
    title: 'Appflow',
    subtitle: 'Integrated suite of tools & services for shipping apps',
    url: 'https://ionicframework.com/docs/appflow/',
    sections: ['appflow'],
    outbound: true
  },
  {
    title: 'Stencil',
    subtitle: 'Reusable web component compiler',
    url: 'https://stenciljs.com',
    sections: [],
    outbound: true
  },
  {
    title: 'Capacitor',
    subtitle: 'Cross-platform Native SDK Container',
    url: 'https://capacitor.ionicframework.com/',
    sections: [],
    outbound: true
  }
];
