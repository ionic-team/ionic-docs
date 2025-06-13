```ts
import { Component } from '@angular/core';
import {
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonReorder,
  IonReorderGroup,
  ReorderEndCustomEvent,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { pizza } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonIcon, IonItem, IonLabel, IonList, IonReorder, IonReorderGroup],
})
export class ExampleComponent {
  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ pizza });
  }

  handleReorderEnd(event: ReorderEndCustomEvent) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  }
}
```
