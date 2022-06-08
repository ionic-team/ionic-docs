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
  lastEmittedValue: RangeValue;

  onIonChange(ev: RangeCustomEvent) {
    this.lastEmittedValue = ev.detail.value;
  }
}
```
