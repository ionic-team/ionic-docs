```ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar, ModalController } from '@ionic/angular/standalone';

import { ModalExampleComponent } from './modal-example.component';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [FormsModule, IonButton, IonContent, IonHeader, IonTitle, IonToolbar],
})
export class ExampleComponent {
  message = 'This modal example uses the modalController to present and dismiss modals.';

  constructor(private modalCtrl: ModalController) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalExampleComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
  }
}
```
