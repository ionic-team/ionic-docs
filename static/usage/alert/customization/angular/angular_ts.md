```ts
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      cssClass: 'custom-alert',
      buttons: [
        'OK',
        {
          text: 'Wow!',
          cssClass: 'custom-alert-button'
        }
      ]
    });

    await alert.present();
  }
}
```