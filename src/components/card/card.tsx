import { Component, Prop } from '@stencil/core';
import { Outbound } from '../../icons';

@Component({
  tag: 'docs-card',
  styleUrl: 'card.css'
})
export class DocsCard {
  @Prop() href: string;
  @Prop() header: string;

  render() {
    const isStatic = !this.href;
    const isOutbound = /^http/.test(this.href);
    const header = !this.header ? null : (
      <header class="Card-header">
        { this.header } { isOutbound ? <Outbound/> : null }
      </header>
    );

    if (isStatic) {
      return (
        <div class="Card">
          { header }
          <div class="Card-content"><slot/></div>
        </div>
      );
    }

    if (isOutbound) {
      return (
        <a class="Card" href={this.href}>
          { header }
          <div class="Card-content"><slot/></div>
        </a>
      );
    }

    return (
      <stencil-route-link url={this.href} anchorClass="Card">
        { header }
        <div class="Card-content"><slot/></div>
      </stencil-route-link>
    );
  }
}
