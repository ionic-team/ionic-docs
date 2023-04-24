```ts
import { Component } from '@angular/core';

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
})
export class PageTwoComponent {

}
```
