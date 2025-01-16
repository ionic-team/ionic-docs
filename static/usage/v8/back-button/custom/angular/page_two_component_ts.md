```ts
import { Component } from '@angular/core';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { caretBack } from 'ionicons/icons';

@Component({
  selector: 'app-page-two',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="Previous" icon="caret-back"></ion-back-button>
        </ion-buttons>
        <ion-title>Back Button</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Page Two</h1>
      <p>Use the back button to navigate to the previous page.</p>
    </ion-content>
  `,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar],
})
export class PageTwoComponent {
  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ caretBack });
  }
}
```
