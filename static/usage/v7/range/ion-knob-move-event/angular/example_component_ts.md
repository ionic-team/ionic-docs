```ts
import { Component } from '@angular/core';

import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  onIonKnobMoveStart(event: Event) {
    console.log('ionKnobMoveStart:', (event as RangeCustomEvent).detail.value);
  }

  onIonKnobMoveEnd(event: Event) {
    console.log('ionKnobMoveEnd:', (event as RangeCustomEvent).detail.value);
  }
}
```
