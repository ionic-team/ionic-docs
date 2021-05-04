import { Component, Prop, h } from '@stencil/core';

import { Page } from '../../definitions';
import { ForwardArrow } from '../../icons';

@Component({
  tag: 'docs-page-footer',
  styleUrl: 'page-footer.css'
})
export class DocsPageFooter {
  @Prop() page!: Page | null;

  hostData() {
    return {
      role: 'contentinfo'
    };
  }

  render() {
    const { page } = this;

    if (page === null || !page.github) {
      return null;
    }

    const {
      path,
      lastUpdated
    } = page.github;

    // merge and dedupe contributor data
    const contributors = Array.from(
      new Set([...page.github.contributors || [], ...page.contributors || []])
    );

    const editHref = `https://github.com/ionic-team/ionic-docs/edit/master/${path}`;
    const updatedHref = `https://github.com/ionic-team/ionic-docs/commits/master/${path}`;
    const updatedText = lastUpdated ? new Date(lastUpdated).toISOString().slice(0, 10) : null;
    const contributorHref = (contributor: any) => `${updatedHref}?author=${contributor}`;

    const pagination = (
      page.previousText && page.previousUrl || page.nextText && page.nextUrl
    ) ? <docs-pagination page={page}/> : '';

    // console.log(pagination);

    return [
      pagination,
      <div class="page-footer__row">
        {contributors.length > 0 ? <contributor-list contributors={contributors} link={contributorHref}/> : null}
        <docs-button round href={editHref}>Contribute <ForwardArrow/></docs-button>
        {updatedText !== null ? <a class="last-updated" href={updatedHref}>Updated {updatedText}</a> : ''}
      </div>
    ];
  }
}
