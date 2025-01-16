```ts
import { Component } from '@angular/core';
import { IonItem, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonItem, IonSelect, IonSelectOption],
})
export class ExampleComponent {}
```
