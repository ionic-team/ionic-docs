```ts
import { Component } from '@angular/core';
import { IonIcon, IonLabel, IonSegment, IonSegmentButton } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { call, heart, pin } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonIcon, IonLabel, IonSegment, IonSegmentButton],
})
export class ExampleComponent {
  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ call, heart, pin });
  }
}
```
