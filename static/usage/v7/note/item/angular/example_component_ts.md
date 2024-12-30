```ts
import { Component } from '@angular/core';
import { IonItem, IonLabel, IonNote } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonItem, IonLabel, IonNote],
})
export class ExampleComponent {}
```
