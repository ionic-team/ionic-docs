```ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { personCircle, search, ellipsisHorizontal, ellipsisVertical, helpCircle, star, create } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonicModule],
  standalone: true,
})
export class ExampleComponent {
  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ personCircle, search, ellipsisHorizontal, ellipsisVertical, helpCircle, star, create });
  }
}
```
