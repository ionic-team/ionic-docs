```ts
import { Component, ViewChild } from '@angular/core';
import {
  IonBreadcrumb,
  IonBreadcrumbs,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonPopover,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonBreadcrumb, IonBreadcrumbs, IonContent, IonItem, IonLabel, IonList, IonPopover],
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
