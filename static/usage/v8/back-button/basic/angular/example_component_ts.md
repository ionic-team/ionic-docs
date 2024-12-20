```ts
import { Component } from '@angular/core';
import { IonNav } from '@ionic/angular/standalone';

import { PageOneComponent } from './page-one.component';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonNav],
})
export class ExampleComponent {
  component = PageOneComponent;
}
```
