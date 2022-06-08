```ts
import { Component } from '@angular/core';

import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  moveStart: RangeValue;
  moveEnd: RangeValue;

  onIonKnobMoveStart(ev: RangeCustomEvent) {
    this.moveStart = ev.detail.value;
  }

  onIonKnobMoveEnd(ev: RangeCustomEvent) {
    this.moveEnd = ev.detail.value;
  }
}
```
