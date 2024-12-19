```ts
import { Component } from '@angular/core';
import { IonButton, IonRadio, IonRadioGroup } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButton, IonRadio, IonRadioGroup],
})
export class ExampleComponent {
  focusElement(id: string) {
    const el = document.querySelector(id) as HTMLElement;

    const app = el.closest('ion-app');
    if (app) {
      app.setFocus([el]);
    }
  }
}
```
