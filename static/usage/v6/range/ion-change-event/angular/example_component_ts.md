```ts
import { Component } from '@angular/core';

import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  lastEmittedValue: RangeValue;

  onIonChange(ev: Event) {
    this.lastEmittedValue = (ev as RangeCustomEvent).detail.value;
  }
}
```
