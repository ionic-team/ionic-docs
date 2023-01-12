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
  collapsedBreadcrumbs: HTMLIonBreadcrumbElement[] = [];

  async presentPopover(e: Event) {
    this.collapsedBreadcrumbs = (e as CustomEvent).detail.collapsedBreadcrumbs;
    this.popover.event = e;
    this.isOpen = true;
  }
}
```
