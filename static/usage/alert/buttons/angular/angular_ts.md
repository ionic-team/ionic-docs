```ts
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  message = "";

  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { this.message = 'Alert canceled'; }
        },
        {
          text: 'OK',
          handler: () => { this.message = 'Alert confirmed'; }
        }
      ]
    });

    await alert.present();
  }
}
```