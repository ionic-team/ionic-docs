```ts
import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings-page',
  templateUrl: 'settings-page.component.html',
  imports: [IonContent, IonHeader, IonTitle, IonToolbar],
})
export class SettingsPageComponent {}
```
