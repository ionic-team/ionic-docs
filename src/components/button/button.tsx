import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'docs-button',
  styleUrl: 'button.css'
})
export class DocsButton {
  @Prop() href: string;
  @Prop({ reflectToAttr: true }) round = false;

  render() {
    if (typeof this.href === 'string') {
      const isInternal = /^\/docs/.test(this.href);

      if (isInternal) {
        return (
          <stencil-route-link url={this.href}>
            <slot/>
          </stencil-route-link>
        );
      }

      return (
        <a href={this.href}>
          <slot/>
        </a>
      );
    }

    return (
      <button>
        <slot/>
      </button>
    );
  }
}
