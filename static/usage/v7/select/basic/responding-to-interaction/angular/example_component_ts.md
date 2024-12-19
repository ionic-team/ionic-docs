```ts
import { Component } from '@angular/core';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonItem, IonList, IonSelect, IonSelectOption],
})
export class ExampleComponent {
  handleChange(e) {
    console.log('ionChange fired with value: ' + e.detail.value);
  }

  handleCancel() {
    console.log('ionCancel fired');
  }

  handleDismiss() {
    console.log('ionDismiss fired');
  }
}
```
