```ts
import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { calendar, heart, musicalNote } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonContent, IonHeader, IonIcon, IonLabel, IonTabBar, IonTabButton, IonTitle, IonToolbar],
})
export class ExampleComponent {
  constructor() {
    addIcons({ calendar, heart, musicalNote });
  }
}
```
