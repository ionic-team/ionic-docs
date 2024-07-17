```ts
import { Component } from '@angular/core';

import { addIcons } from 'ionicons';
import { add, colorPalette, document, globe } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
})
export class ExampleComponent {
  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ add, colorPalette, document, globe });
  }
}
```
