import { Component, Prop, h } from '@stencil/core';
import { BackArrow, ForwardArrow } from '../../icons';
import { Page } from '../../definitions';

@Component({
  tag: 'docs-pagination',
  styleUrl: 'pagination.css'
})
export class DocsPagination {
  @Prop() page: Page = { title: null, body: null };

  render() {
    const {
      previousText,
      previousUrl,
      nextText,
      nextUrl
    } = this.page;

    const shouldShowPrevious = previousText && previousUrl;
    const shouldShowNext = nextText && nextUrl;

    const links = [];

    if (shouldShowPrevious) {
      links.push(
        <stencil-route-link
          url={previousUrl}
          key="previous"
          class="previous"
          anchorTitle={previousText}>
            <div class="paggination__title">Previous</div>
            <div class="paggination__text">
              <BackArrow/>
              <span>{previousText}</span>
            </div>
        </stencil-route-link>
      );
    }

    if (shouldShowNext) {
      links.push(
        <stencil-route-link
          url={nextUrl}
          key="next"
          class="next"
          anchorTitle={nextText}>
            <div class="paggination__title">Next</div>
            <div class="paggination__text">
              <span>{nextText}</span>
              <ForwardArrow/>
            </div>
        </stencil-route-link>
      );
    }

    return links;
  }
}
