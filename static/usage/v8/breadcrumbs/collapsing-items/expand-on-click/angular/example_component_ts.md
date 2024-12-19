```ts
import { Component, ViewChild } from '@angular/core';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonBreadcrumb, IonBreadcrumbs],
})
export class ExampleComponent {
  maxBreadcrumbs = 4;

  expandBreadcrumbs() {
    this.maxBreadcrumbs = undefined;
  }
}
```
