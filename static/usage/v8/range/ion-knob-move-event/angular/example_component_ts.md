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
  onIonKnobMoveStart(event: RangeCustomEvent) {
    console.log('ionKnobMoveStart:', event.detail.value);
  }

  onIonKnobMoveEnd(event: RangeCustomEvent) {
    console.log('ionKnobMoveEnd:', event.detail.value);
  }
}
```
