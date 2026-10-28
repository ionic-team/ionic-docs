```ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonInputOtp } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonInputOtp, FormsModule],
})
export class ExampleComponent {}
```
