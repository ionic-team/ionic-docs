```ts
import { Component } from '@angular/core';

import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  onIonChange(event: Event) {
    console.log('ionChange emitted value:', (event as RangeCustomEvent).detail.value);
  }
}
```
