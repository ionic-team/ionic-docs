```ts
import { Component } from '@angular/core';
import { IonItem, IonList, IonToggle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonItem, IonList, IonToggle],
})
export class ExampleComponent {}
```
