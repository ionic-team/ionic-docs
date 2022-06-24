```ts
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Select your favorite color',
      buttons: ['OK'],
      inputs: [
        {
          label: 'Red',
          type: 'radio',
          value: 'red'
        },
        {
          label: 'Blue',
          type: 'radio',
          value: 'blue'
        },
        {
          label: 'Green',
          type: 'radio',
          value: 'green'
        }
      ]
    });

    await alert.present();
  }
}
```