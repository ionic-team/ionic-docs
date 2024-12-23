```ts
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonDatetime, IonDatetimeButton, IonModal],
  // This schema is used to bypass an issue in Ionic Framework v7
  // where formatOptions is not exported. Upgrade to Ionic
  // Framework 8.1.1 or later to remove this workaround.
  schemas: [NO_ERRORS_SCHEMA],
})
export class ExampleComponent {}
```
