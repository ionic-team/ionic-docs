```ts
import { Component } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonTitle, IonToolbar],
})
export class ExampleComponent {}
```
