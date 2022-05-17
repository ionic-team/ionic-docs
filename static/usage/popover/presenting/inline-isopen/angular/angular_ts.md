```ts
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  @ViewChild('popover') popover;
  constructor() {}

  isOpen = false;

  presentPopover(e) {
    this.popover.event = e;
    this.isOpen = true;
  }
}
```
