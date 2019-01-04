import { Component, Prop } from '@stencil/core';
import { BackArrow, ForwardArrow } from '../../icons';
import { Document } from '../../definitions';

@Component({
  tag: 'docs-pagination',
  styleUrl: 'pagination.css'
})
export class DocsPagination {
  @Prop() document: Document;

  render() {
    const {
      previousText,
      previousUrl,
      nextText,
      nextUrl
    } = this.document;

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
            <BackArrow/>
            <span>{previousText}</span>
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
            <span>{nextText}</span>
            <ForwardArrow/>
        </stencil-route-link>
      );
    }

    return links;
  }
}
