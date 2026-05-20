```ts
import { Component } from '@angular/core';
import { IonBadge, IonIcon, IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { airplane, bus, car, train } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonBadge, IonIcon, IonItem, IonList, IonSelect, IonSelectOption],
})
export class ExampleComponent {
  readonly selectInterfaces = ['alert', 'action-sheet', 'modal', 'popover'];

  /* The interfaceOptions property is for demonstration purposes only. */
  /* It is not required for the rich options to work. */
  readonly interfaceOptions = { header: 'Travel mode' };

  constructor() {
    addIcons({ airplane, bus, car, train });
  }

  formatInterfaceLabel(selectInterface: string): string {
    return selectInterface
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
```
