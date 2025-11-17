```ts
import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonicModule],
  standalone: true,
})
export class ExampleComponent {
  constructor(private toastController: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Hello Styled World!',
      duration: 3000,
      cssClass: 'custom-toast',
      buttons: [
        {
          text: 'Dismiss',
          role: 'cancel',
        },
      ],
    });

    await toast.present();
  }
}
```
