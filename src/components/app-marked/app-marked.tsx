import { Component, Element, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'app-marked',
})
export class AppMarked {

  @Prop() doc: string;
  @Prop({ context: 'isServer' }) private isServer: boolean;

  @State() content: string;

  @Element() el: Element;

  componentWillLoad() {
    return this.fetchNewContent();
  }

  @Watch('doc')

  fetchNewContent() {
    console.log('Fetching doc', this.doc);
    return fetch(`/docs-content/${this.doc}`)
      .then(response => response.text())
      .then(data => {
        this.content = data;

        this.el.innerHTML = '<h1>Hi there</h1>';

        this.el.innerHTML += data;

        // requestAnimationFrame is not available for preRendering
        // or SSR, so only run this in the browser
        if (!this.isServer) {
          window.requestAnimationFrame(() => {
            document.getElementsByTagName('stencil-router')[0].scrollTop = 0;
          })
        }

      });
  }

  /*render() {
    return (
      <div innerHTML={this.content}></div>
    )
  }*/
}
