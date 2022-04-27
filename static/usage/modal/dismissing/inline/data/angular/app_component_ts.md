```ts
import { Component } from '@angular/core';
import { IonModal, IonInput } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  message: string;

  dismiss(modal: IonModal, input: IonInput) {
    this.message = `Hello, ${input.value}!`;
    modal.dismiss();
  }
}
```
