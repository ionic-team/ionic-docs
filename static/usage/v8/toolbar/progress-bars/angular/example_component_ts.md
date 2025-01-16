```ts
import { Component } from '@angular/core';
import { IonHeader, IonProgressBar, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonHeader, IonProgressBar, IonTitle, IonToolbar],
})
export class ExampleComponent {}
```
