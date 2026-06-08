```ts
import { Component } from '@angular/core';
import { IonGallery, IonGalleryItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonGallery, IonGalleryItem],
})
export class ExampleComponent {}
```
