```ts
import { Component } from '@angular/core';
import { IonButton, IonToast } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButton, IonToast],
})
export class ExampleComponent {
  public toastButtons = [
    {
      text: 'More Info',
      role: 'info',
      handler: () => {
        console.log('More Info clicked');
      },
    },
    {
      text: 'Dismiss',
      role: 'cancel',
      handler: () => {
        console.log('Dismiss clicked');
      },
    },
  ];

  setRoleMessage(event: CustomEvent) {
    const { role } = event.detail;
    console.log(`Dismissed with role: ${role}`);
  }
}
```
