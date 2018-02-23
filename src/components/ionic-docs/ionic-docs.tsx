import { Component } from '@stencil/core';
import '@stencil/router'; // tslint:disable-line:no-import-side-effect

@Component({
  tag: 'ionic-docs',
  styleUrl: 'ionic-docs.scss'
})
export class IonicDocs {
  render() {
    return [
      <site-header/>,
      <site-menu/>,
      <site-content/>,
      <site-preview-app/>
    ];
  }
}
