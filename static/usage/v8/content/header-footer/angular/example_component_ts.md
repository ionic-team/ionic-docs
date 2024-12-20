```ts
import { Component } from '@angular/core';
import { IonContent, IonFooter, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonContent, IonFooter, IonHeader, IonTitle, IonToolbar],
})
export class ExampleComponent {}
```
