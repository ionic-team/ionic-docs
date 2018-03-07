import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'code-preview',
  styleUrl: 'code-preview.css'
})
export class CodePreview {
  @Prop() markup = '';

  render() {
    return <iframe src={
      `data:text/html,${encodeURIComponent(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>body{margin:0;}</style>
            <script src="https://unpkg.com/@ionic/core/dist/ionic.js"></script>
          </head>
          <body>${unescape(this.markup)}</body>
        </html>
      `)}`
    }/>;
  }
}
