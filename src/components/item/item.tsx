import { Component, Prop, h } from '@stencil/core';
import { Outbound } from '../../icons';

@Component({
  tag: 'docs-item',
  styleUrl: 'item.css'
})
export class DocsItem {
  @Prop() href: string;
  @Prop() header: string;
  @Prop() icon: string;
  @Prop() ionicon: string;
  @Prop() rounded = false;

  hostData() {
    return {
      class: {
        'Item-rounded': this.rounded,
      }
    };
  }

  render() {
    const isStatic = !this.href;
    const isOutbound = /^http/.test(this.href);
    const header = !this.header ? null : (
      <header class="Item-header">
        { this.header } { isOutbound ? <Outbound/> : null }
      </header>
    );

    const content = [
      this.icon && <img src={this.icon} class="Item-icon"/>,
      <div class="Item-container">
        { this.ionicon && <ion-icon name={this.ionicon} class="Item-ionicon"></ion-icon>}
        { header }
        <div class="Item-content"><slot/></div>
      </div>
    ];

    if (isStatic) {
      return (
        <div class="Item">
          { content }
        </div>
      );
    }

    if (isOutbound) {
      return (
        <a class="Item" href={this.href}>
          { content }
        </a>
      );
    }

    return (
      <stencil-route-link url={this.href} anchorClass="Item">
        { content }
      </stencil-route-link>
    );
  }
}
