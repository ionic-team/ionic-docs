```ts
import { Component } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonModal,
  IonPicker,
  IonPickerColumn,
  IonPickerColumnOption,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  imports: [IonButton, IonButtons, IonModal, IonPicker, IonPickerColumn, IonPickerColumnOption, IonToolbar],
})
export class ExampleComponent {
  currentValue = 'javascript';

  onIonChange(event: CustomEvent) {
    this.currentValue = event.detail.value;
  }

  onDidDismiss(event: CustomEvent) {
    console.log('didDismiss', JSON.stringify(event.detail));
  }
}
```
