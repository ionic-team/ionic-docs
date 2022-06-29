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
      header: 'Are you sure?',
      cssClass: 'custom-alert',
      buttons: [
        'No',
        {
          text: 'Yes, I\'m sure',
          cssClass: 'alert-button-confirm'
        }
      ]
    });

    await alert.present();
  }
}
```