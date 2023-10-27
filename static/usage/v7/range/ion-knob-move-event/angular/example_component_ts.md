```ts
import { Component } from '@angular/core';

import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  onIonKnobMoveStart(ev: Event) {
    console.log('ionKnobMoveStart:', (ev as RangeCustomEvent).detail.value);
  }

  onIonKnobMoveEnd(ev: Event) {
    console.log('ionKnobMoveEnd:', (ev as RangeCustomEvent).detail.value);
  }
}
```
