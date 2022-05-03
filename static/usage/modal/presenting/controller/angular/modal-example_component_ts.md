```ts
import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-example',
  templateUrl: 'modal-example.component.html',
})
export class ModalExampleComponent {
  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    return this.modalCtrl.dismiss();
  }
}
```
