```ts
import { Component } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonButton, IonContent, IonHeader, IonMenu, IonMenuToggle, IonTitle, IonToolbar],
})
export class ExampleComponent {}
```
