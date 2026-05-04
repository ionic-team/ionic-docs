```ts
import { Component } from '@angular/core';
import { IonGallery } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonGallery],
})
export class ExampleComponent {
  columns = {
    xs: 3,
    sm: 6,
    md: 8,
    lg: 9,
    xl: 10,
    xxl: 12,
  };
}
```
