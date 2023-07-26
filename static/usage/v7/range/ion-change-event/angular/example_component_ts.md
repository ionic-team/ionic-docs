```ts
import { Component } from '@angular/core';

import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  onIonChange(ev: Event) {
    console.log('ionChange emitted value:', (ev as RangeCustomEvent).detail.value);
  }
}
```
