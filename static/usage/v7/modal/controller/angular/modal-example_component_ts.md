```ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonTitle,
  IonToolbar,
  ModalController,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal-example',
  templateUrl: 'modal-example.component.html',
  imports: [FormsModule, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonTitle, IonToolbar],
})
export class ModalExampleComponent {
  name!: string;

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }
}
```
