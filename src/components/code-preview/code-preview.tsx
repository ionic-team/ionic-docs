import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'code-preview',
  styleUrl: 'code-preview.scss'
})
export class CodePreview {
  @Prop() markup = '';

  render() {
    const markup = this.markup.indexOf('<ion-app') !== -1 ? this.markup :
      `<ion-app>${this.markup}</ion-app>`;
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
