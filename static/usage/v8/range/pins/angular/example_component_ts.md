```ts
import { Component } from '@angular/core';
import { IonRange } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonRange],
})
export class ExampleComponent {
  pinFormatter(value: number) {
    return `${value}%`;
  }
}
```
