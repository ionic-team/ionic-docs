import { Component } from '@stencil/core';

@Component({
  tag: 'home-page'
})
export class HomePage {

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen padding>
        <h1>Welcome to the home page</h1>
      </ion-content>
    ];
  }
}
