```ts
import { Component } from '@angular/core';

import { PageTwoComponent } from './page-two.component';

@Component({
  selector: 'app-page-one',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Back Button</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Page One</h1>
      <p>Navigate to the next page to see the back button.</p>
      <ion-button [routerLink]="['/two']">Navigate</ion-button>
    </ion-content>
  `,
})
export class PageOneComponent {
  component = PageTwoComponent;
}
```
