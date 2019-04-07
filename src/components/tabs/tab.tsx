import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'docs-tab'
})
export class DocsTab {
  @Prop({ reflectToAttr: true }) tab: string;

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
