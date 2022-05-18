```ts
import { Component, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './popover.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  roleMsg = "";

  constructor(public popoverController: PopoverController) {}

  async presentPopover(e) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: e
    });

    await popover.present();
  
    const { role } = await popover.onDidDismiss();
    this.roleMsg = `Popover dismissed with role: ${role}`;
  }
}
```
