```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  // Typically referenced to your ion-router-outlet
  presentingElement: HTMLElement | null = null;

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }
}
```
