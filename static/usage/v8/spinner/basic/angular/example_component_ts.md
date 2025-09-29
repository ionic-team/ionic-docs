```ts
import { Component } from '@angular/core';
import { IonItem, IonLabel, IonSpinner } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonItem, IonLabel, IonSpinner],
})
export class ExampleComponent {}
```
