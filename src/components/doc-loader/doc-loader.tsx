import { Component, Element, Event, EventEmitter, Prop, State, Watch } from '@stencil/core';
import { renderMarkdown } from './markdown';
import frontMatter from 'front-matter';

@Component({
  tag: 'doc-loader'
})
export class DocLoader {
  @Element() el: Element;
  @Event() docLoaded: EventEmitter;
  @Prop() path: string;
  @State() body: string;
  @State() title: string;

  componentWillLoad() {
    return this.fetchNewContent();
  }

  validateResponse = res => {
    if (res.ok) return res;
    throw new Error(res.statusText);
  }

  handleFetchError = err => {
    this.title = null;
    this.body = `<p>Unable to load ${this.path}: ${err.message}</p>`;
  }

  @Watch('path')
  fetchNewContent() {
    return fetch(`/docs/docs-content/${this.path}.md`)
      .then(this.validateResponse)
      .then(res => res.text())
      .then(text => frontMatter(text))
      .then(({ attributes, body }) => {
        this.title = attributes['title'];
        this.body = renderMarkdown(body);
        this.docLoaded.emit();
      })
      .catch(this.handleFetchError);
  }

  render() {
    return [
      this.title && <h1>{this.title}</h1>,
      <main innerHTML={this.body}></main>
    ];
  }
}
