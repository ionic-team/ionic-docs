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
  onIonChange(event: RangeCustomEvent) {
    console.log('ionChange emitted value:', event.detail.value);
  }
}
```
