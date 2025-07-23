```ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [FormsModule, IonicModule],
  standalone: true
})
export class ExampleComponent {
  menuType: string = 'overlay';
}
```
