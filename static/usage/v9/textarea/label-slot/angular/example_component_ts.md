```ts
import { Component } from '@angular/core';
import { IonItem, IonList, IonText, IonTextarea } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonItem, IonList, IonText, IonTextarea],
})
export class ExampleComponent {}
```
