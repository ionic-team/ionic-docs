```ts
import { Component } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonButton],
})
export class ExampleComponent {
  constructor(private loadingCtrl: LoadingController) {}

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Dismissing after 3 seconds...',
      duration: 3000,
    });

    loading.present();
  }
}
```
