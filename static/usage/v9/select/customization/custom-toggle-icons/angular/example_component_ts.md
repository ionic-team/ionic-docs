```ts
import { Component } from '@angular/core';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { add, remove } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonItem, IonList, IonSelect, IonSelectOption],
})
export class ExampleComponent {
  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ add, remove });
  }
}
```
