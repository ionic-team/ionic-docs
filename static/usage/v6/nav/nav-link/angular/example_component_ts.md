```ts
import { Component } from '@angular/core';

import { PageOneComponent } from './page-one.component';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  component = PageOneComponent;
}
```
