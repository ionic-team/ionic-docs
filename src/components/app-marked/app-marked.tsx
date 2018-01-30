import { Component, Prop, PropDidChange, State } from '@stencil/core';

@Component({
  tag: 'app-marked',
})
export class AppMarked {

  @Prop() doc: string;
  @Prop({ context: 'isServer' }) private isServer: boolean;

  @State() content: string;

  componentWillLoad() {
    return this.fetchNewContent();
  }

  @PropDidChange('doc')
  fetchNewContent() {
    console.log('Fetching doc', this.doc);
    return fetch(`/docs-content/${this.doc}`)
      .then(response => response.text())
      .then(data => {
        this.content = data;
        // console.log(data);

        const el = document.createElement('div');
        el.innerHTML = data;

        // requestAnimationFrame is not available for preRendering
        // or SSR, so only run this in the browser
        if (!this.isServer) {
          window.requestAnimationFrame(() => {
            document.getElementById('main-content').scrollTop = 0;
          })
        }

      });
  }

  render() {
    return (
      <div innerHTML={this.content}></div>
    )
  }
}
