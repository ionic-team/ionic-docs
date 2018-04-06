import {
  Component,
  Event,
  EventEmitter,
  Prop,
  State,
  Watch
} from '@stencil/core';
import { Helmet } from '@stencil/helmet';
import { renderMarkdown } from '../../markdown';
import frontMatter from 'front-matter';

@Component({
  tag: 'doc-loader'
})
export class DocLoader {
  @Event() docLoaded: EventEmitter;
  @Prop() path: string;
  @State() body: string;
  @State() hideTOC: boolean;
  @State() title: string;

  componentWillLoad() {
    return this.fetchNewContent();
  }

  @Watch('path')
  fetchNewContent() {
    return fetch(`/docs/docs-content/${this.path}.md`)
      .then(this.validateResponse)
      .then(res => res.text())
      .then(this.handleNewContent)
      .catch(this.handleFetchError);
  }

  validateResponse = res => {
    if (res.ok) return res;
    throw new Error(res.statusText);
  }

  handleFetchError = err => {
    this.title = null;
    this.body = `<p>Unable to load ${this.path}: ${err.message}</p>`;
  }

  handleNewContent = text => {
    const { attributes, body } = this.stripTitle(frontMatter(text));
    const { path } = this;
    this.title = attributes.title;
    this.hideTOC = attributes.hideTOC;
    this.body = renderMarkdown(body);
    this.docLoaded.emit({ ...attributes, path });
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
    return [
      <Helmet>
        <title>{this.title}</title>
      </Helmet>,
      this.title && <h1>{this.title}</h1>,
      !this.hideTOC && <table-of-contents/>,
      <main innerHTML={this.body}></main>
    ];
  }
}
