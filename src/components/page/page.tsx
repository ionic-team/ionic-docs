import { Component, Prop, State, Watch, h } from '@stencil/core';
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
  @State() badFetch: Response = null;
  @State() page: Page = { title: null, body: null };

  componentWillLoad() {
    return this.fetchPage(this.path);
  }

  @Watch('path')
  fetchPage(path, oldPath?) {
    if (path == null || path === oldPath) return;
    path = /^\/docs\/pages\/[a-z]{2}\.json$/.test(path)
      ? path.replace('.json', '/index.json')
      : path;
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
      document.documentElement.scrollTo(x, y);
    });
  }

  @Watch('page')
  setDocumentMeta(page: Page) {
    const { title, meta = {} } = page;
    const metaEls = {
      title: document.head.querySelectorAll('.meta-title'),
      description: document.head.querySelectorAll('.meta-description'),
      url: document.head.querySelectorAll('.meta-url, link[rel="canonical"]'),
      image: document.head.querySelectorAll('.meta-image')
    };

    function updateMeta(els, update) {
      els.forEach(el => {
        ['href', 'content'].forEach(attr => {
          if (el.hasAttribute(attr)) {
            el.setAttribute(attr, update(el.getAttribute(attr)));
          }
        });
      });
    }

    // Title
    const getTitle = () => {
      const suffix = /^\/docs\/pages\/appflow.*$/.test(this.path) ?
        'Ionic Appflow Documentation' : 'Ionic Documentation';
      // Favor meta title, else go with auto-title. fallback to generic title
      return meta.title || title ? `${title} - ${suffix}` : suffix;
    };
    document.title = getTitle();
    updateMeta(metaEls.title, getTitle);

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
        <docs-demo url={page.demoUrl} source={page.demoSourceUrl}/>
      );
    }

    return content;
  }
}
