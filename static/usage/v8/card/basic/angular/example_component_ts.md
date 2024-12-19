```ts
import { Component } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle],
})
export class ExampleComponent {}
```
