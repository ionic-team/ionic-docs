```ts
import { Component } from '@angular/core';
import {
  IonBackdrop,
  IonButton,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonBackdrop, IonButton, IonCheckbox, IonContent, IonHeader, IonTitle, IonToolbar],
})
export class ExampleComponent {}
```
