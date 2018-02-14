import { Component } from '@stencil/core';

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
