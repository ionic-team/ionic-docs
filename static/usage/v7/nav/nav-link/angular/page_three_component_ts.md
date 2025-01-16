```ts
import { Component } from '@angular/core';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-page-one',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Page Three</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Page Three</h1>
    </ion-content>
  `,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar],
})
export class PageThreeComponent {}
```
