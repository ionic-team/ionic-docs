import { Component, Prop, State, Watch } from '@stencil/core';
import frontMatter from 'front-matter';
import { renderMarkdown } from '../../markdown';

@Component({
  tag: 'docs-document',
  styleUrl: 'docs-document.scss'
})
export class DocsDocument {
  @Prop() path: string;
  @Prop() onLoaded: (document) => void;
  @State() isLoading = true;
  @State() body: string;
  @State() title: string;
  @State() hideTOC: boolean;

  componentDidLoad() {
    this.fetchDocument();
  }

  @Watch('path')
  fetchDocument() {
    this.isLoading = true;
    return fetch(`/docs/docs-content/${this.path}.md`)
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
      .then(({ attributes, body }) => ({ ...attributes, body: renderMarkdown(body) }));
  }

  handleNewContent = content => {
    this.isLoading = false;
    this.body = content.body;
    this.title = content.title;
    this.hideTOC = content.hideTOC;
    this.onLoaded(content);
  }

  handleFetchError = err => {
    this.body = err.message;
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

    return [
      <h1>{this.title}</h1>,
      !this.hideTOC && <table-of-contents/>,
      <main innerHTML={this.body}/>
    ];
  }
}
