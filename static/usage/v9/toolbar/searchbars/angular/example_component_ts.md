```ts
import { Component } from '@angular/core';
import { IonHeader, IonSearchbar, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonHeader, IonSearchbar, IonTitle, IonToolbar],
})
export class ExampleComponent {}
```
