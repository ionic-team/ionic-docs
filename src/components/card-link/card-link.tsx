import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'card-link',
  styleUrl: 'card-link.scss'
})
export class CardLink {
  @Prop() headline: string;
  @Prop() url: string;
  @Prop() hasIcon = false;

  hostData() {
    return {
      'class': {
        'has-icon': this.hasIcon,
        [`card-${this.headline.toLowerCase().replace(' ', '-')}`]: true
      }
    };
  }

  render() {
    return (
      <stencil-route-link url={this.url} title={this.headline}>
        <strong class="card-link__title">{this.headline}</strong>
        <span class="card-link__body"><slot/></span>
      </stencil-route-link>
    );
  }
}
