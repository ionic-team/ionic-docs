import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'page-index'
})
export class PageIndex {

  @Prop() pages: any[];

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>
            Components Demo App
          </ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content padding-vertical fullscreen>
        <ion-list>
          {this.pages.map(([key, { name }]) => (
            <ion-item href={key}>{name}</ion-item>
          ))}
        </ion-list>
      </ion-content>
    ];
  }
}
