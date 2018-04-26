import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'section-switch',
  styleUrl: 'section-switch.scss'
})
export class SectionSwitch {
  @Prop() section: string;

  render() {
    return <div>{ this.section }</div>;
  }
}
