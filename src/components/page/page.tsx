import { Component, Prop, State, Watch } from '@stencil/core';
import { Page } from '../../definitions';
import templates from './templates';

@Component({
  tag: 'docs-page',
  styleUrl: 'page.css'
})
export class DocsPage {
  @Prop() path: string;
  @Prop({ context: 'document' }) private document: HTMLDocument;
  @State() badFetch: Response = null;
  @State() page: Page = { title: null, body: null };

  componentWillLoad() {
    return this.fetchPage(this.path);
  }

  @Watch('path')
  fetchPage(path, oldPath?) {
    if (path == null || path === oldPath) return;
    return fetch(path)
      .then(this.validateFetch)
      .then(this.handleNewPage)
      .catch(this.handleBadFetch);
  }

  validateFetch = (response) => {
    if (!response.ok) throw response;
    return response.json();
  }

  handleNewPage = (page) => {
    this.badFetch = null;
    this.page = page;
  }

  handleBadFetch = (error: Response) => {
    this.badFetch = error;
    this.page = {
      title: error.statusText,
      body: null
    };
  }

  @Watch('page')
  setDocumentTitle(page: Page) {
    const { title, meta = {} } = page;
    const suffix = /^\/docs\/pages\/appflow.*$/.test(this.path) ? 'Ionic Appflow Documentation' : 'Ionic Documentation';
    const pageTitle = meta.title || `${title} - ${suffix}`;
    this.document.title = pageTitle;
  }

  hostData() {
    return {
      class: {
        [this.page.pageClass]: typeof this.page.pageClass === 'string'
      }
    };
  }

  render() {
    const { page } = this;

    if (this.badFetch) {
      return templates.error(this.badFetch);
    }

    const Template = templates[page.template] || templates.default;

    const content = [
      <main>
        <Template page={page}/>
      </main>
    ];

    if (typeof page.demoUrl === 'string') {
      content.push(
        <docs-demo url={page.demoUrl}/>
      );
    }

    const shouldShowPagination = (
      page.previousText && page.previousUrl || page.nextText && page.nextUrl
    );

    if (shouldShowPagination) {
      content.push(
        <docs-pagination page={page}/>
      );
    }

    return content;
  }
}
