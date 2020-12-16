import { Component, Prop, State, h } from '@stencil/core';

import { Outbound } from '../../icons';

@Component({
  tag: 'docs-card',
  styleUrl: 'card.css'
})
export class DocsCard {
  @Prop() href?: string;
  @Prop() header?: string;
  @Prop() icon?: string;
  @Prop() hoverIcon?: string;
  @Prop() iconset?: string;
  @Prop() ionicon?: string;
  @Prop() img?: string;
  @Prop() size?: 'md' | 'lg';
  @State() activeIndex = 0;

  interval!: number;
  rotationTime = 6000; // 4 seconds

  hostData() {
    return {
      class: {
        'Card-with-image': typeof this.img !== 'undefined',
        'Card-without-image': typeof this.img === 'undefined',
        'Card-size-lg': this.size === 'lg',
      }
    };
  }

  componentWillLoad() {
    if (typeof this.iconset !== 'undefined') { return; }
    this.activeIndex = 0;
    this.rotationTime = 4000 + (Math.random() * 2000); // 4 - 6 seconds - randomize it a bit
    // make the first transiton happen a bit faster
    setInterval(this.tic.bind(this), this.rotationTime);
    setTimeout(this.tic.bind(this), this.rotationTime / 3);
  }

  componentWillUnload() {
    clearInterval(this.interval);
  }

  tic() {
    if (typeof this.iconset !== 'undefined' && this.activeIndex >= this.iconset.split(',').length - 1) {
      return this.activeIndex = 0;
    }
    this.activeIndex++;
  }

  render() {
    const isStatic = typeof this.href === 'undefined';
    const isOutbound = typeof this.href !== 'undefined' ? /^http/.test(this.href) : false;
    const header = this.header === 'undefined' ? null : (
      <header class="Card-header">
        {this.header} {isOutbound ? <Outbound/> : null}
      </header>
    );
    const hoverIcon = this.hoverIcon || this.icon;

    const content = [
      this.img && <img src={this.img} class="Card-image"/>,
      <div class="Card-container">
        {this.icon && <img src={this.icon} class="Card-icon Card-icon-default"/>}
        {hoverIcon && <img src={hoverIcon} class="Card-icon Card-icon-hover"/>}
        {this.ionicon && <ion-icon name={this.ionicon} class="Card-ionicon"></ion-icon>}
        { this.iconset && <div class="Card-iconset__container">
          {this.iconset.split(',').map((icon, index) =>
            <img
              src={icon}
              class={`Card-icon ${index === this.activeIndex ? 'Card-icon--active' : ''}`}
              data-index={index}
            />
          )}
        </div>}
        {header}
        <div class="Card-content"><slot/></div>
      </div>
    ];

    if (isStatic) {
      return (
        <div class="Card">
          {content}
        </div>
      );
    }

    if (isOutbound) {
      return (
        <a class="Card" href={this.href}>
          {content}
        </a>
      );
    }

    return (
      <stencil-route-link url={this.href} anchorClass="Card">
        {content}
      </stencil-route-link>
    );
  }
}
