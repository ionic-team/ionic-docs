```ts
import { Component } from '@angular/core';
import { IonContent, IonGallery, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonContent, IonGallery, IonHeader, IonTitle, IonToolbar],
})
export class ExampleComponent {}
```
