```ts
import { Component } from '@angular/core';

import { PageOneComponent } from './page-one.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  pageOne = PageOneComponent;
}
```
