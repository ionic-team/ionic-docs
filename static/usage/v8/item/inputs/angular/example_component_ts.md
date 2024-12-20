```ts
import { Component } from '@angular/core';
import {
  IonCheckbox,
  IonInput,
  IonItem,
  IonRange,
  IonSelect,
  IonSelectOption,
  IonToggle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonCheckbox, IonInput, IonItem, IonRange, IonSelect, IonSelectOption, IonToggle],
})
export class ExampleComponent {}
```
