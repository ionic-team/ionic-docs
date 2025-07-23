```ts
import { Component } from '@angular/core';

import { IonicModule, RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonicModule],
  standalone: true
})
export class ExampleComponent {
  lastEmittedValue: RangeValue;

  onIonChange(ev: Event) {
    this.lastEmittedValue = (ev as RangeCustomEvent).detail.value;
  }
}
```
