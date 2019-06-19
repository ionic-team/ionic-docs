import { Component, Prop, h } from '@stencil/core';
import { Outbound } from '../../icons';

@Component({
  tag: 'docs-card',
  styleUrl: 'card.css'
})
export class DocsCard {
  @Prop() href: string;
  @Prop() header: string;
  @Prop() icon: string;
  @Prop() ionicon: string;
  @Prop() img: string;

  hostData() {
    return {
      class: {
        'Card-with-image': !!this.img,
        'Card-without-image': !this.img,
      }
    };
  }

  render() {
    const isStatic = !this.href;
    const isOutbound = /^http/.test(this.href);
    const header = !this.header ? null : (
      <header class="Card-header">
        { this.header } { isOutbound ? <Outbound/> : null }
      </header>
    );

    const content = [
      this.img && <img src={this.img} class="Card-image"/>,
      <div class="Card-container">
        { this.icon && <img src={this.icon} class="Card-icon"/> }
        { this.ionicon && <ion-icon name={this.ionicon} class="Card-ionicon"></ion-icon>}
        { header }
        <div class="Card-content"><slot/></div>
      </div>
    ];

    if (isStatic) {
      return (
        <div class="Card">
          { content }
        </div>
      );
    }

    if (isOutbound) {
      return (
        <a class="Card" href={this.href}>
          { content }
        </a>
      );
    }

    return (
      <stencil-route-link url={this.href} anchorClass="Card">
        { content }
      </stencil-route-link>
    );
  }
}
