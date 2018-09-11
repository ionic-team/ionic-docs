import { Component, Prop, State, Watch } from '@stencil/core';
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
  @Prop({ context: 'document' }) private document: HTMLDocument;
  @Prop({ context: 'isServer' }) private isServer: boolean;
  @Prop() isLoadingTimeout = 1000;
  @State() isLoading = false;
  @State() body: string;
  @State() title: string;
  @State() hideTOC = false;
  @State() frontMatter: { [key: string]: any } = {};
  @State() tocHeadings: HeadingStruc[] = [];
  @State() pageClass: string;
  @State() attributes: { [key: string]: any } = {};

  loadingTimer = null;

  componentWillLoad() {
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
    this.setDocumentTitle(this.title);
    this.onUpdate({
      ...attributes,
      body,
      headings,
      pageClass: this.pageClass
    });
  }

  handleFetchError = err => {
    this.title = '';
    this.hideTOC = true;
    this.body = err.message;
    this.clearLoadingTimer();
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

  setDocumentTitle(title: string) {
    const pageTitle = `Ionic Docs${ title ? ` - ${title}` : '' }`;
    this.document.title = pageTitle;
    this.document.head.querySelector('meta[property="og:title"]').setAttribute('content', pageTitle);
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

  renderPreviewLink() {
    if (!this.attributes.previewUrl) return null;

    return (
      <a href={this.attributes.previewUrl} class="open-preview" target="_blank">
        <ion-icon name="md-open"></ion-icon>
        Open Preview
      </a>
    );
  }

  render() {
    if (this.isLoading) {
      return this.isServer ? null : <loading-indicator/>;
    }

    const headings = this.tocHeadings.filter(heading => heading.level < 3);

    return [
      <h1>{this.title}</h1>,
      this.renderPreviewLink(),
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
      !this.frontMatter.hideFooter && <docs-footer frontmatter={this.frontMatter} path={this.path}/>
    ];
  }
}
