```ts
import { Component } from '@angular/core';
import { IonAlert, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonAlert, IonButton],
})
export class ExampleComponent {
  isAlertOpen = false;
  alertButtons = ['Action'];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
```
