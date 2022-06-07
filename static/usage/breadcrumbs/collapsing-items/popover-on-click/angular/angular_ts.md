```ts
import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './popover.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(public popoverController: PopoverController) {}

  async presentPopover(e: Event) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: {
        collapsedBreadcrumbs: (e as CustomEvent).detail.collapsedBreadcrumbs
      },
      event: e
    });

    await popover.present();
  }
}
```
