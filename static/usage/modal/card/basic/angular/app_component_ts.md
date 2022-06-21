```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  // Typically referenced to your ion-router-outlet
  presentingElement = null;

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }
}
```
