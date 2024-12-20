```ts
import { Component } from '@angular/core';
import { IonItem, IonList, IonRadio, IonRadioGroup } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonItem, IonList, IonRadio, IonRadioGroup],
})
export class ExampleComponent {}
```
