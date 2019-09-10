import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'code-pen',
  styleUrl: 'code-pen.css',
  shadow: true
})
export class CodePen {
  @Prop() user: string;
  @Prop() slug: string;
  @Prop() penTitle: string;
  @Prop() preview = true;
  @Prop() height = '300';
  @Prop() defaultTab = 'result';
  @Prop() theme = '0';

  render() {
    return (
      <Host
        class="codepen"
        data-height={this.height}
        data-theme-id={this.theme}
        data-default-tab={this.defaultTab}
        data-user={this.user}
        data-slug-hash={this.slug}
        data-preview={(this.preview) ? 'true' : 'false'}
        data-pen-title={this.penTitle}
      >
        <slot></slot>
        <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
      </Host>
    );
  }
}
