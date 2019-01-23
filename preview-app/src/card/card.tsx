import { Component } from '@stencil/core';

@Component({
  tag: 'page-card',
  styleUrl: 'card.css'
})
export class PageCard {
  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Card</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content fullscreen>
        <ion-card>
          <img src="./assets/madison.jpg" />
          <ion-card-header>
            <ion-card-subtitle>Destination</ion-card-subtitle>
            <ion-card-title>Madison, WI</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
          </ion-card-content>
        </ion-card>
      </ion-content>
    ];
  }
}
