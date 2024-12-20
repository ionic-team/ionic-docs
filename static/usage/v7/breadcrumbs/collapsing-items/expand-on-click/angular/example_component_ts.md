```ts
import { Component } from '@angular/core';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonBreadcrumb, IonBreadcrumbs],
})
export class ExampleComponent {
  maxBreadcrumbs? = 4;

  expandBreadcrumbs() {
    this.maxBreadcrumbs = undefined;
  }
}
```
