```ts
import { Component } from '@angular/core';
import { IonAvatar, IonChip, IonIcon, IonLabel } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { close, closeCircle, pin } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonAvatar, IonChip, IonIcon, IonLabel],
})
export class ExampleComponent {
  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ close, closeCircle, pin });
  }
}
```
