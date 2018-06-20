import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'code-preview',
  styleUrl: 'code-preview.scss'
})
export class CodePreview {
  @Prop() markup = '';
  @Prop() inline = false;

  render() {
    const markup = this.markup.indexOf('ion-app') !== -1 && !this.inline ?
      this.markup :
      `<ion-app>${this.markup}</ion-app>`;

    if (this.inline) {
      return <div innerHTML={unescape(markup)}/>;
    }

    return <iframe src={
      `data:text/html,${encodeURIComponent(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>body{margin:0;}</style>
            <script src="https://unpkg.com/@ionic/core/dist/ionic.js"></script>
          </head>
          <body>${unescape(markup)}</body>
        </html>
      `)}`
    }/>;
  }
}
