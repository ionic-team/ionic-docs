```ts
import { Component } from '@angular/core';
import { IonItem, IonLabel, IonList, IonListHeader, IonSkeletonText, IonThumbnail } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonItem, IonLabel, IonList, IonListHeader, IonSkeletonText, IonThumbnail],
})
export class ExampleComponent {}
```
