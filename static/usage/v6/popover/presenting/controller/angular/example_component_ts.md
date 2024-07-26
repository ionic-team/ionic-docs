```ts
import { Component, ViewChild } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { PopoverComponent } from './popover.component';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  roleMsg = '';

  constructor(public popoverController: PopoverController) {}

  async presentPopover(e: Event) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: e,
    });

    await popover.present();

    const { role } = await popover.onDidDismiss();
    this.roleMsg = `Popover dismissed with role: ${role}`;
  }
}
```
