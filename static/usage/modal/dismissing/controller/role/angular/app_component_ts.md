```ts
import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { ModalExampleComponent } from './modal-example.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  message: string;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.openModal();
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalExampleComponent,
    });
    modal.present();

    const { role } = await modal.onDidDismiss();
    this.message = `Modal was dismissed with role: ${role}`;
  }
}
```
