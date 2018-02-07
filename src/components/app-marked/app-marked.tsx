import { Component, Element, Prop, State, Watch } from '@stencil/core';
import marked from 'marked';
import fm from 'front-matter';

@Component({
  tag: 'app-marked',
})
export class AppMarked {

  @Prop() doc: string;
  @Prop({ context: 'isServer' }) private isServer: boolean;

  @State() content: object;

  @State() sections: [string];

  @Element() el: Element;

  componentWillLoad() {
    return this.fetchNewContent();
  }

  @Watch('doc')

  fetchNewContent() {
    console.log('Fetching doc', this.doc);
    return fetch(`/docs-content/${this.doc}.md`)
      .then(response => response.text().then(text => fm(text)))
      .then(data => {
        this.content = data;

        this.content['body'] = marked(this.content['body']);

        // requestAnimationFrame is not available for preRendering
        // or SSR, so only run this in the browser
        if (!this.isServer) {
          window.requestAnimationFrame(() => {
            document.getElementsByTagName('stencil-router')[0].scrollTop = 0;
          })
        }
      });
  }

  render() {
    const attrs = this.content['attributes'];
    const title = attrs.title ? (<h1>{attrs.title}</h1>) : null;
    const toc = attrs['hide-toc'] ?
      null : (<table-of-contents></table-of-contents>);
    return [
      title,
      toc,
      <main innerHTML={this.content['body']}></main>
    ]
  }
}
