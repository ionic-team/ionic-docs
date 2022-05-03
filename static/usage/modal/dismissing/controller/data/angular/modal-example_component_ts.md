```ts
import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-example',
  templateUrl: 'modal-example.component.html',
})
export class ModalExampleComponent {
  constructor(private modalCtrl: ModalController) {}

  dismiss(value: string | number) {
    return this.modalCtrl.dismiss(value);
  }
}
```
