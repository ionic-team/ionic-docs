```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  public toastButtons = [
    {
      text: 'Dismiss',
      role: 'cancel'
    }
  ];

  constructor() {}
}
```
