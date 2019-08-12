import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'docs-tab'
})
export class DocsTab {
  @Prop({ reflectToAttr: true }) tab: string;
  @Prop({ reflectToAttr: true }) selected = false;

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
