```ts
import { Component } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonNavLink, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { PageTwoComponent } from './page-two.component';

@Component({
  selector: 'app-page-one',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Page One</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Page One</h1>
      <ion-nav-link router-direction="forward" [component]="component">
        <ion-button>Go to Page Two</ion-button>
      </ion-nav-link>
    </ion-content>
  `,
  imports: [IonButton, IonContent, IonHeader, IonNavLink, IonTitle, IonToolbar],
})
export class PageOneComponent {
  component = PageTwoComponent;
}
```
