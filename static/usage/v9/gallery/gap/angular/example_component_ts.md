```ts
import { Component } from '@angular/core';
import { IonGallery, IonGalleryItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonGallery, IonGalleryItem],
})
export class ExampleComponent {
  gap = {
    xs: '2px',
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '10px',
    xxl: '12px',
  };
}
```
