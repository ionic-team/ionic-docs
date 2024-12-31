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
  onIonKnobMoveStart(event: Event) {
    console.log('ionKnobMoveStart:', (event as RangeCustomEvent).detail.value);
  }

  onIonKnobMoveEnd(event: Event) {
    console.log('ionKnobMoveEnd:', (event as RangeCustomEvent).detail.value);
  }
}
```
