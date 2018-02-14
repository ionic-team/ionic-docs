import { Component, Element, Prop, State, Watch } from '@stencil/core';
import marked from 'marked';
import frontMatter from 'front-matter';

@Component({
  tag: 'site-content',
})
export class SiteContent {
  @Element() el: Element;
  @Prop() doc: string;
  @Prop({ context: 'isServer' }) private isServer: boolean;
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
    this.body = `<p>Unable to load ${this.doc}: ${err.message}</p>`;
  }

  @Watch('doc')
  fetchNewContent() {
    return fetch(`/docs/docs-content/${this.doc}.md`)
      .then(this.validateResponse)
      .then(res => res.text())
      .then(text => frontMatter(text))
      .then(({ attributes, body }) => {
        this.title = attributes['title'];
        this.body = marked(body);
        this.scrollToTop();
      })
      .catch(this.handleFetchError);
  }

  scrollToTop() {
    if (this.isServer) {
      window.requestAnimationFrame(() => {
        document.querySelector('stencil-router').scrollTop = 0;
      });
    }
  }

  render() {
    return [
      this.title && <h1>{this.title}</h1>,
      <main innerHTML={this.body}></main>
    ]
  }
}
