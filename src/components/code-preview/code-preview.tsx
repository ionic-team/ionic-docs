import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'code-preview',
  styleUrl: 'code-preview.scss'
})
export class CodePreview {
  @Prop() markup = '';
  @Prop() inline = false;

  render() {
    if (this.inline) {
      return <div innerHTML={unescape(this.markup)}/>;
    }

    return <iframe src={
      `data:text/html,${encodeURIComponent(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>body{margin:0;}</style>
            <link rel="stylesheet" href="https://unpkg.com/@ionic/core/css/ionic.bundle.css"/>
            <script src="https://unpkg.com/@ionic/core/dist/ionic.js"></script>
          </head>
          <body>${unescape(this.markup)}</body>
        </html>
      `)}`
    }/>;
  }
}
