import { Component, State, h } from '@stencil/core';
import { getAd } from './ad-service';

@Component({
  tag: 'internal-ad',
  styleUrl: 'internal-ad.css'
})
export class InternalAd {

  apiURL = 'https://ionicframeworkcom.prismic.io/api/v2';

  @State() ad: any;

  constructor() {
    this.update();
  }

  async update() {
    this.ad = await getAd();
    console.log(this.ad);
  }

  render() {
    if (!this.ad || Object.keys(this.ad).length === 0) return;

    return (
      <picture>
        <source media="(min-width: 37.5em)" src={this.ad.ad_image.url}/>
        <source src={this.ad.ad_image['1x'].url}/>
        <img src={this.ad.ad_image.url}
             alt={this.ad.ad_image.alt}
             height={this.ad.ad_image['1x'].dimensions.height}
             width={this.ad.ad_image['1x'].dimensions.width} />
        <p>{this.ad.ad_image.alt}</p>
      </picture>
    );
  }
}
