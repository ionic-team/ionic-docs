```ts
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  @ViewChild('popover') popover;

  isOpen = false;
  collapsedBreadcrumbs: HTMLIonBreadcrumbElement[] = [];

  async presentPopover(e: Event) {
    this.collapsedBreadcrumbs = (e as CustomEvent).detail.collapsedBreadcrumbs;
    this.popover.event = e;
    this.isOpen = true;
  }
}
```
