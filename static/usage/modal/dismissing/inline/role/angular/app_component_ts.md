```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  message: string;

  onModalDismissed(ev) {
    this.message = `Modal was dismissed with role: ${ev.detail.role}`;
  }
}
```
