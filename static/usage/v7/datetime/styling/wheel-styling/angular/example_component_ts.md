```ts
import { Component, ViewEncapsulation } from '@angular/core';

// ViewEncapsulation is turned off for this demo due to
// a lack of support for styling multiple css shadow parts
// See https://github.com/angular/angular/issues/22515
@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ExampleComponent {}
```
