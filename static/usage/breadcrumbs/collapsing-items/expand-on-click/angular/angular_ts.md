```ts
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor() {}

  maxBreadcrumbs = 4;

  expandBreadcrumbs() {
    this.maxBreadcrumbs = undefined;
  }
}
```
