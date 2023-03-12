```ts
import { Component } from '@angular/core';
import { IonNav } from '@ionic/angular';

@Component({
  selector: 'app-page-one',
  template: `
    <ion-content class="ion-padding">
      <h1>Page Three</h1>
      <ion-button (click)="navigateBack()">Go Back</ion-button>
      <ion-button (click)="navigateToRoot()">Go to Root</ion-button>
    </ion-content>
  `,
})
export class PageThreeComponent {
  constructor(private nav: IonNav) {}

  navigateBack() {
    this.nav.pop();
  }

  navigateToRoot() {
    this.nav.popToRoot();
  }
}
```
