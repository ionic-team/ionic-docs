```ts
import { Component } from '@angular/core';
import { IonButton, PopoverController } from '@ionic/angular/standalone';

import { PopoverComponent } from './popover.component';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
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
