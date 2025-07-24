```ts
import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { globe } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonicModule],
  standalone: true
})
export class ExampleComponent {
  constructor(private toastController: ToastController) {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ globe });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      icon: 'globe',
    });

    await toast.present();
  }
}
```
