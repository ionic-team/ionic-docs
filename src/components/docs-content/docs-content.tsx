import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'docs-content',
  styleUrl: 'docs-content.scss'
})
export class DocsContent {
  @Prop() showOverlay: boolean;
  @Prop() onOverlayClick: () => void;

  render() {
    if (this.showOverlay) {
      return [
        <div class="content-overlay" onClick={this.onOverlayClick}/>,
        <slot/>
      ];
    }

    return <slot/>;
  }
}
