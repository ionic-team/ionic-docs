```ts
import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  imports: [IonContent, IonHeader, IonTitle, IonToolbar],
})
export class HomePageComponent {}
```
