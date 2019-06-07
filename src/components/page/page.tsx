import { Component, Prop, State, Watch } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { Page } from '../../definitions';
import templates from './templates';

@Component({
  tag: 'docs-page',
  styleUrl: 'page.css'
})
export class DocsPage {
  @Prop() history: RouterHistory;
  @Prop() path: string;
  @Prop({ context: 'isServer' }) private isServer: boolean;
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
  setScrollPosition() {
    if (this.isServer || this.history.location.hash) {
      return;
    }

    requestAnimationFrame(() => {
      const { location } = this.history;
      const { scrollPosition = [0, 0] } = location;
      const [x, y] = scrollPosition;
      this.document.documentElement.scrollTo(x, y);
    });
  }

  @Watch('page')
  setDocumentMeta(page: Page) {
    const { title, meta = {} } = page;
    const metaEls = {
      title: document.querySelectorAll('head .meta-title'),
      description: document.querySelectorAll('head .meta-description'),
      url: document.querySelectorAll('head .meta-url'),
      image: document.querySelectorAll('head .meta-image')
    };

    function updateMeta(els, update) {
      els.forEach(el => {
        ['href', 'content'].forEach(attr => {
          if (el[attr]) {
            el[attr] = update(el[attr]);
          }
        });
        ['title'].forEach(elType => {
          if (el.nodeName === elType.toUpperCase()) {
            el.text = update(el.text);
          }
        });
      });
    }

    // Title
    updateMeta(metaEls.title, () => {
      const suffix = /^\/docs\/pages\/appflow.*$/.test(this.path) ?
        'Ionic Appflow Documentation' : 'Ionic Documentation';
      // Favor meta title, else go with auto-title. fallback to generic title
      return meta.title || title ? `${title} - ${suffix}` : suffix;
    });

    // Canonical URL
    updateMeta(metaEls.url, oldVal => {
      const uri = '\/docs\/';
      let path = location.pathname.split(uri)[1];
      if (path === undefined) {
        path = '';
      }
      return oldVal.split(uri)[0] + uri + path;
    });

    // Description
    updateMeta(metaEls.description, () => meta.description ||
      'Ionic is the app platform for web developers. Build amazing mobile, web, and desktop apps all with one shared code base and open web standards');

    // Sharing Image
    updateMeta(metaEls.image, () => meta.image ||
      'https://ionicframework.com/docs/assets/img/meta/open-graph.png');
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
    const hasDemo = typeof page.demoUrl === 'string';

    if (this.badFetch) {
      return templates.error(this.badFetch);
    }

    const Template = templates[page.template] || templates.default;

    const content = [
      <main class={hasDemo ? 'has-demo' : 'no-demo'}>
        <Template page={page}/>
      </main>
    ];

    if (hasDemo) {
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
