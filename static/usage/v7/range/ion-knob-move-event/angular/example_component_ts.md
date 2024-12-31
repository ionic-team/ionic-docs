```ts
import { Component } from '@angular/core';
import { IonRange, RangeCustomEvent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonRange],
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
