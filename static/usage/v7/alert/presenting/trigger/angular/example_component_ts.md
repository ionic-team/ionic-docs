```ts
import { Component } from '@angular/core';
import { IonAlert, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonAlert, IonButton],
})
export class ExampleComponent {
  alertButtons = ['Action'];
}
```
