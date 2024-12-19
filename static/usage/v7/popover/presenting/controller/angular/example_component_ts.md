```ts
import { Component, ViewChild } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

import { PopoverController } from '@ionic/angular';

import { PopoverComponent } from './popover.component';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonButton],
})
export class ExampleComponent {
  constructor(public popoverController: PopoverController) {}

  async presentPopover(e: Event) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: e,
    });

    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log(`Popover dismissed with role: ${role}`);
  }
}
```
