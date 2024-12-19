```ts
import { Component } from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle],
})
export class ExampleComponent {}
```
