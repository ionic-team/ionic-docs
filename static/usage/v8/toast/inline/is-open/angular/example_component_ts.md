```ts
import { Component } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonTitle, IonToast, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToast, IonToolbar],
})
export class ExampleComponent {
  isToastOpen = false;

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
}
```
