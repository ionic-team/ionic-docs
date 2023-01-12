```ts
import { Component, ViewChild } from '@angular/core';

import { IonPopover } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  @ViewChild('popover') popover!: IonPopover;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
}
```
