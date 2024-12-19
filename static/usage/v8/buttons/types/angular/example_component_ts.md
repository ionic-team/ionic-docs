```ts
import { Component } from '@angular/core';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonIcon,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonBackButton, IonButton, IonButtons, IonIcon, IonMenuButton, IonTitle, IonToolbar],
})
export class ExampleComponent {
  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star });
  }
}
```
