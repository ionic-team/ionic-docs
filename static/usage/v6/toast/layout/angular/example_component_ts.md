```ts
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import type { ToastOptions } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  constructor(private toastController: ToastController) {}

  async presentToast(opts: ToastOptions) {
    const toast = await this.toastController.create(opts);

    await toast.present();
  }

  async presentBaselineToast() {
    await this.presentToast({
      duration: 3000,
      message: 'This is a toast with a long message and a button that appears on the same line.',
      buttons: [{ text: 'Action With Long Text' }],
    });
  }

  async presentStackedToast() {
    await this.presentToast({
      duration: 3000,
      message: 'This is a toast with a long message and a button that appears on the next line.',
      buttons: [{ text: 'Action With Long Text' }],
      layout: 'stacked',
    });
  }
}
```
