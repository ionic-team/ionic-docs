```ts
import { ModalController } from '@ionic/angular';
import { ModalExampleComponent } from './modal-example.component';

@Component({
  selector: 'app-example',
  template: `<ion-button (click)="openModal()">Open Modal</ion-button>`,
})
export class ExampleComponent {
  constructor(private modalCtrl: ModalController) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalExampleComponent,
    });
    modal.present();
  }
}
```
