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
  @State() hideTOC: boolean;

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

  @Watch('path')
  fetchNewContent() {
    return fetch(`/docs/docs-content/${this.path}.md`)
      .then(this.validateResponse)
      .then(res => res.text())
      .then(text => this.stripTitle(frontMatter(text)))
      .then(({ attributes, body }) => {
        this.title = attributes['title'];
        this.hideTOC = attributes['hideTOC'];
        this.body = renderMarkdown(body);
        this.docLoaded.emit(attributes);
      })
      .catch(this.handleFetchError);
  }

  render() {
    // console.log(this.body);
    return [
      this.title && <h1>{this.title}</h1>,
      !this.hideTOC && <table-of-contents/>,
      <main innerHTML={this.body}></main>
    ];
  }
}
