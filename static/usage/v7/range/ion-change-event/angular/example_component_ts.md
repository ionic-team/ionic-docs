```ts
import { Component } from '@angular/core';
import { IonRange } from '@ionic/angular/standalone';

import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonRange],
})
export class ExampleComponent {
  onIonChange(ev: Event) {
    console.log('ionChange emitted value:', (ev as RangeCustomEvent).detail.value);
  }
}
```
