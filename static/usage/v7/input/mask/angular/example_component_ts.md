```ts
import { Component } from '@angular/core';
import { IonInput, IonItem, IonList } from '@ionic/angular/standalone';

import { MaskitoOptions, MaskitoElementPredicate, maskitoTransform } from '@maskito/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonInput, IonItem, IonList],
})
export class ExampleComponent {
  readonly phoneMask: MaskitoOptions = {
    mask: ['+', '1', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  };

  //If you need to set an initial value, you can use maskitoTransform to ensure the value is valid
  myPhoneNumber = maskitoTransform('5555551212', this.phoneMask);

  readonly cardMask: MaskitoOptions = {
    mask: [
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(3).fill(/\d/),
    ],
  };

  readonly maskPredicate: MaskitoElementPredicate = async (el) => (el as HTMLIonInputElement).getInputElement();
}
```
