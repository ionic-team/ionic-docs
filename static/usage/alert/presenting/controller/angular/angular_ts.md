```ts
import { Component, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  roleMsg = "";

  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK']
    });

    await alert.present();
  
    const { role } = await alert.onDidDismiss();
    this.roleMsg = `Alert dismissed with role: ${role}`;
  }
}
```