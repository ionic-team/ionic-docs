```ts
import { Component } from '@angular/core';
import { IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { add, chevronBack, chevronDown, chevronForward, chevronUp } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonFab, IonFabButton, IonFabList, IonIcon],
})
export class ExampleComponent {
  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ add, chevronBack, chevronDown, chevronForward, chevronUp });
  }
}
```
