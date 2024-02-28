```ts
import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-example',
  templateUrl: 'modal-example.component.html',
})
export class ModalExampleComponent {
  name: string;

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }
}
```
