```ts
import { Component } from '@angular/core';
import { IonButton, IonToast } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { globe } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButton, IonToast],
})
export class ExampleComponent {
  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ globe });
  }
}
```
