```ts
import { Component } from '@angular/core';
import { IonItem, IonLabel, IonList, IonListHeader } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonItem, IonLabel, IonList, IonListHeader],
})
export class ExampleComponent {}
```
