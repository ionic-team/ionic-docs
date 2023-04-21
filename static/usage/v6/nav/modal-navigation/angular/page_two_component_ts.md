```ts
import { Component } from '@angular/core';
import { IonNav } from '@ionic/angular';

import { PageThreeComponent } from './page-three.component';

@Component({
  selector: 'app-page-two',
  template: `
    <ion-content class="ion-padding">
      <h1>Page Two</h1>
      <ion-button (click)="navigateToPageThree()">Go to Page Three</ion-button>
    </ion-content>
  `,
})
export class PageTwoComponent {
  component = PageThreeComponent;

  constructor(private nav: IonNav) {}

  navigateToPageThree() {
    this.nav.push(PageThreeComponent);
  }
}
```
