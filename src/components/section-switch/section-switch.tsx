import { Component, Prop } from '@stencil/core';
import { Ionic } from '../../icons';

@Component({
  tag: 'section-switch',
  styleUrl: 'section-switch.scss'
})
export class SectionSwitch {
  @Prop() section: string;

  renderSelector(dropdown) {
    return (
      <div class={{ 'section-switch__selector': true, 'is-open': dropdown.isOpen }}>
        <a class="section-switch__logo" href="/docs">
          <Ionic/>
          <span>Docs</span>
        </a>
        <span class="section-switch__selected" onClick={dropdown.toggle}>
          { this.section }
          <svg viewBox="0 0 33 22"><polygon points="16.5 22 0 0 33 0"></polygon></svg>
        </span>
      </div>
    );
  }

  renderPanel(dropdown) {
    return (
      <ul class={{ 'section-switch__panel': true, 'is-open': dropdown.isOpen }}>
        <li>Framework</li>
        <li>Pro</li>
        <li>CLI</li>
        <li>Stencil</li>
        <li>Capacitor</li>
      </ul>
    );
  }

  render() {
    return (
      <ctrl-dropdown
        class="section-switch"
        autoClose
        renderer={dropdown => [
          this.renderSelector(dropdown),
          this.renderPanel(dropdown)
        ]}/>
    );
  }
}
