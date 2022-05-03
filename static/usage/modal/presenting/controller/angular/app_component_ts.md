```ts
import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { ModalExampleComponent } from './modal-example.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(private modalCtrl: ModalController) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalExampleComponent,
    });
    modal.present();
  }
}
```
