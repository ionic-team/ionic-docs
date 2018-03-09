import { Component, Prop } from '@stencil/core';
import { isExternal } from '../../utils/url';

@Component({
  tag: 'uber-link',
  styleUrl: 'uber-link.scss',
})
export class UberLink {
  // anchor attributes (TODO: Can we inherit attributes from the anchor tag?)
  @Prop() target: string;
  @Prop() href: string;

  // uber-link props
  @Prop() external: boolean;
  @Prop() iconVariety: string;

  isExternal(): boolean {
    if (typeof this.external === 'boolean') {
      return this.external;
    }

    return this.href && isExternal(this.href);
  }

  getTarget(): string {
    if (typeof this.target === 'string') {
      return this.target;
    }

    if (this.isExternal()) {
      return '_blank';
    }

    return '_self';
  }

  render() {
    return (
      <a class={{ [`icon-variety-${this.iconVariety || 'white'}`]: this.isExternal() }} href={ this.href } target={ this.getTarget() }>
        <slot />
        { this.isExternal() ? <svg viewBox="0 0 43 42">
          <rect class="box" y="8" width="34" height="34" rx="6"/>
          <path class="arrow" d="M37.078 3.268H23.617V.243h18.626v18.625h-3.026V5.407L16.13 28.494l-2.14-2.139z"/>
        </svg> : null }
      </a>
    );
  }
}
