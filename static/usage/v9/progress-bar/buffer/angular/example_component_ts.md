```ts
import { Component, signal } from '@angular/core';
import { IonProgressBar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonProgressBar],
})
export class ExampleComponent {
  readonly buffer = signal(0.06);
  readonly progress = signal(0);

  constructor() {
    setInterval(() => {
      this.buffer.update((value) => value + 0.06);
      this.progress.update((value) => value + 0.06);

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress() > 1) {
        setTimeout(() => {
          this.buffer.set(0.06);
          this.progress.set(0);
        }, 1000);
      }
    }, 1000);
  }
}
```
