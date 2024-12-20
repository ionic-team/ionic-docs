```ts
import { Component } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonMenu,
  IonMenuToggle,
  IonRadio,
  IonRadioGroup,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [
    IonButton,
    IonContent,
    IonHeader,
    IonItem,
    IonMenu,
    IonMenuToggle,
    IonRadio,
    IonRadioGroup,
    IonTitle,
    IonToolbar,
  ],
})
export class ExampleComponent {
  menuType: string = 'overlay';
}
```
