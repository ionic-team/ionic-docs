import { Component, Prop } from '@stencil/core';
import { Ionic } from '../../icons';

@Component({
  tag: 'section-switch',
  styleUrl: 'section-switch.scss'
})
export class SectionSwitch {
  @Prop() section: string;

  render() {
    return [
      <div class="section-switch__selector">
        <a class="section-switch__logo" href="/docs">
          <Ionic/>
          <span>Docs</span>
        </a>
        <span class="section-switch__current">
          { this.section }
          <svg viewBox="0 0 33 22"><polygon points="16.5 22 0 0 33 0"></polygon></svg>
        </span>
      </div>
    ];
  }
}
