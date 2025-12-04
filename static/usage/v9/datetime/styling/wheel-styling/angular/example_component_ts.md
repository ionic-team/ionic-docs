```ts
import { Component, ViewEncapsulation } from '@angular/core';
import { IonDatetime } from '@ionic/angular/standalone';

// ViewEncapsulation is turned off for this demo due to
// a lack of support for styling multiple css shadow parts
// See https://github.com/angular/angular/issues/22515
@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  encapsulation: ViewEncapsulation.None,
  imports: [IonDatetime],
})
export class ExampleComponent {}
```
