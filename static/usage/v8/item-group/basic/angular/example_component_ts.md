```ts
import { Component } from '@angular/core';
import { IonItem, IonItemDivider, IonItemGroup, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonItem, IonItemDivider, IonItemGroup, IonLabel],
})
export class ExampleComponent {}
```
