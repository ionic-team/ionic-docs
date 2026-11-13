```ts
import { Component } from '@angular/core';
import { IonRange, RangeKnobMoveEndCustomEvent, RangeKnobMoveStartCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonRange],
})
export class ExampleComponent {
  onIonKnobMoveStart(event: RangeKnobMoveStartCustomEvent) {
    const { knob, position, value } = event.detail;
    console.log('ionKnobMoveStart:', knob, position, value);
  }

  onIonKnobMoveEnd(event: RangeKnobMoveEndCustomEvent) {
    const { knob, position, value } = event.detail;
    console.log('ionKnobMoveEnd:', knob, position, value);
  }
}
```
