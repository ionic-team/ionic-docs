import { Build, Component, Method, State, h } from '@stencil/core';
import PrismicDOM from 'prismic-dom';

import { getAd } from './ad-service';
import { trackClick, trackView } from './tracking-service';

@Component({
  tag: 'internal-ad',
  styleUrl: 'internal-ad.css'
})
export class InternalAd {
  @State() ad: any;

  timeout!: ReturnType<typeof setTimeout>;

  async componentWillLoad() {
    if (Build.isBrowser) {
      return this.update();
    }
  }

  @Method()
  async update() {
    this.ad = await getAd();
    if (!this.ad) {
      return;
    }
    // give the page a chance to reflow
    this.timeout = setTimeout(() => {
      trackView(this.ad.ad_id);
    }, 50);
  }

  disconnectedCallback() {
    // if the reflowed page doesn't have an ad, don't fire view events
    clearTimeout(this.timeout);
  }

  render() {
    if (Build.isServer || !this.ad || Object.keys(this.ad).length === 0) { return; }

    return (
      <a
        href={this.ad.ad_url.url}
        target={this.ad.ad_url.target}
        onClick={e => trackClick(this.ad.ad_id, e)}
      >
        {/* Reponsive image since Prismic supports it out of the box */}
        <picture>
          <source media="(min-width: 37.5em)" src={this.ad.ad_image.url} />
          <source src={this.ad.ad_image['1x'].url} />
          <img
            src={this.ad.ad_image.url}
            alt={this.ad.ad_image.alt}
            height={this.ad.ad_image['1x'].dimensions.height}
            width={this.ad.ad_image['1x'].dimensions.width}
          />
          <p>{this.ad.ad_image.alt}</p>
        </picture>
        <div innerHTML={PrismicDOM.RichText.asHtml(this.ad.ad_copy)}></div>
      </a>
    );
  }
}
