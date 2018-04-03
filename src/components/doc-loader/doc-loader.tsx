import {
  Component,
  Event,
  EventEmitter,
  Prop,
  State,
  Watch
} from '@stencil/core';
import { Helmet } from '@stencil/helmet';
import { renderMarkdown } from './markdown';
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
    attributes.path = this.path;
    this.title = attributes.title;
    this.hideTOC = attributes.hideTOC;
    this.body = renderMarkdown(body);
    this.docLoaded.emit(attributes);
  }

  stripTitle = separated => {
    let body = separated.body;
    const attributes = separated.attributes;
    const firstH1 = /^# (.*?)$/gm.exec(body);
    if (firstH1 && firstH1[1]) {
      body = body.replace(firstH1[0], '');
      attributes['title'] = attributes['title'] ?
        attributes['title'] : firstH1[1];
    }
    return {body: body, attributes: attributes};
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
