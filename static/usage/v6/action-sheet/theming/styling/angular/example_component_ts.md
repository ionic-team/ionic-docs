```ts
import { Component } from '@angular/core';

import { IonicModule, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['./example.component.css'],
  imports: [IonicModule],
  standalone: true
})
export class ExampleComponent {
  constructor(private actionSheetCtrl: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Example header',
      subHeader: 'Example subheader',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    actionSheet.present();
  }
}
```
