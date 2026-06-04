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
  readonly progress = signal(0);

  constructor() {
    setInterval(() => {
      this.progress.update((value) => value + 0.01);

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress() > 1) {
        setTimeout(() => {
          this.progress.set(0);
        }, 1000);
      }
    }, 50);
  }
}
```
