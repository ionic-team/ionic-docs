```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  isOpen = true;

  dismiss() {
    this.isOpen = false;
  }
}
```
