```ts
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  handlerMessage = '';
  roleMessage = '';

  constructor(private toastController: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 3000,
      buttons: [
        {
          text: 'More Info',
          role: 'info',
          handler: () => { this.handlerMessage = 'More Info clicked'; }
        },
        {
          text: 'Dismiss',
          role: 'cancel',
          handler: () => { this.handlerMessage = 'Dismiss clicked'; }
        }
      ]
    });

    await toast.present();

    const { role } = await toast.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }
}
```