import { Component } from '@stencil/core';

@Component({
  tag: 'page-button',
  styleUrl: 'button.css'
})
export class PageButton {
  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Button</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content fullscreen padding>
        <p><ion-button color="light">Light</ion-button></p>
        <p><ion-button>Default</ion-button></p>
        <p><ion-button color="secondary">Secondary</ion-button></p>
        <p><ion-button color="danger">Danger</ion-button></p>
        <p><ion-button color="dark">Dark</ion-button></p>
      </ion-content>
    ];
  }
}
