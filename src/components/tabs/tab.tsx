import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'docs-tab'
})
export class DocsTab {
  @Prop({ reflect: true }) tab!: string;
  @Prop({ reflect: true }) selected = false;

  hostData() {
    return {
      role: 'tabpanel',
      class: {
        'Tabs-tab': true
      }
    };
  }

  render() {
    return <slot/>;
  }
}
