import { Component, Prop, State, Watch } from '@stencil/core';
import { Helmet } from '@stencil/helmet';
import frontMatter from 'front-matter';
import { HeadingStruc, renderMarkdown } from '../../markdown';

@Component({
  tag: 'docs-document',
  styleUrls: [
    'docs-document.scss',
    'table-of-contents.scss'
  ]
})
export class DocsDocument {
  @Prop() path: string;
  /* tslint:disable */
  @Prop() onUpdate: (document) => void = () => {};
  /* tslint:enable */
  @Prop() isLoadingTimeout = 1000;
  @State() isLoading = false;
  @State() body: string;
  @State() title: string;
  @State() hideTOC = false;
  @State() frontMatter = {};
  @State() tocHeadings: HeadingStruc[] = [];
  @State() pageClass: string;
  @State() attributes = {};

  loadingTimer = null;

  componentDidLoad() {
    return this.fetchDocument();
  }

  @Watch('path')
  fetchDocument() {
    this.setLoadingTimer();
    return fetch(`/docs/content/${this.path}.md`)
      .then(this.validateResponse)
      .then(this.parseDocument)
      .then(this.handleNewContent)
      .catch(this.handleFetchError);
  }

  validateResponse = res => {
    if (!res.ok) throw new Error(`Unable to fetch ${this.path}: ${res.statusText}`);
    return res;
  }

  parseDocument = res => {
    return res.text()
      .then(frontMatter)
      .then(this.stripTitle)
      .then(({ attributes, body }) => ({
          attributes,
          ...renderMarkdown(body, attributes)
      }));
  }

  handleNewContent = ({ attributes, body, headings }) => {
    this.body = body;
    this.title = attributes.title;
    this.hideTOC = attributes.hideTOC;
    this.frontMatter = attributes;
    this.tocHeadings = this.hideTOC ? [] : headings;
    this.attributes = attributes;
    this.pageClass = this.path.replace(/\//g, '-');
    this.clearLoadingTimer();
  }

  handleFetchError = err => {
    this.title = '';
    this.hideTOC = true;
    this.body = err.message;
    this.clearLoadingTimer();
  }

  componentDidUpdate() {
    const { attributes, body, tocHeadings: headings, pageClass } = this;
    this.onUpdate({
      ...attributes,
      body,
      headings,
      pageClass
    });
  }

  setLoadingTimer() {
    this.loadingTimer = setTimeout(() => {
      this.isLoading = true;
    }, this.isLoadingTimeout);
  }

  clearLoadingTimer() {
    clearTimeout(this.loadingTimer);
    this.isLoading = false;
  }

  stripTitle = ({ attributes, body }) => {
    const match = /^# (.*?)$/gm.exec(body);
    if (match) {
      const [ titleLine, title ] = match;
      body = body.replace(titleLine, '');
      attributes.title = attributes.title || title;
    }
    return { attributes, body };
  }

  render() {
    if (this.isLoading) {
      return <loading-indicator/>;
    }

    const headings = this.tocHeadings.filter(heading => heading.level < 3);

    return [
      <Helmet>
        <title>{ this.title ? `${this.title} - Ionic Docs` : 'Ionic Docs' }</title>
      </Helmet>,
      <h1>{this.title}</h1>,
      <div class="table-of-contents">
        {(headings.length > 0) && !this.hideTOC ? [
        <strong class="toc-label">Contents</strong>,
        <ul class="toc-list">
          {headings.map(heading => {
            return (
              <li class="toc-item">
                <a href={`#${heading.anchorId}`} innerHTML={heading.text}></a>
              </li>
            );
          })}
        </ul>
        ] : null }
      </div>,
      <main innerHTML={this.body}/>,
      <docs-footer frontmatter={this.frontMatter} path={this.path}/>
    ];
  }
}
