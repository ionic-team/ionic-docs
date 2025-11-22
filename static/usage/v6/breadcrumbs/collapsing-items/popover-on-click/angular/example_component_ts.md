```ts
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [CommonModule, IonicModule],
  standalone: true,
})
export class ExampleComponent {
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
