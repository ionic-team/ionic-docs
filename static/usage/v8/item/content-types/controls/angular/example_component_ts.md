```ts
import { Component } from '@angular/core';
import {
  IonCheckbox,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonCheckbox, IonContent, IonHeader, IonInput, IonItem, IonList, IonTitle, IonToolbar],
})
export class ExampleComponent {}
```
