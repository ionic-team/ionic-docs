```ts
import { Component } from '@angular/core';
import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { gridOutline, settingsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs],
})
export class ExampleComponent {
  constructor() {
    addIcons({ gridOutline, settingsOutline });
  }
}
```
