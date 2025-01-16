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
  toastButtons = [
    {
      text: 'Action With Long Text',
    },
  ];
}
```
