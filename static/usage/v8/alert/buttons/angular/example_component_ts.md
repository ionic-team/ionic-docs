```ts
import { Component } from '@angular/core';
import { IonAlert, IonButton } from '@ionic/angular/standalone';
import type { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonAlert, IonButton],
})
export class ExampleComponent {
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  setResult(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }
}
```
