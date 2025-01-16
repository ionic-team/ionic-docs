```ts
import { Component } from '@angular/core';
import { IonItem, IonList, IonSelect, IonSelectOption, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonItem, IonList, IonSelect, IonSelectOption, IonText],
})
export class ExampleComponent {}
```
