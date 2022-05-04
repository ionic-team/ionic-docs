```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  // Typically referenced to your ion-router-outlet
  presentingElement = document.querySelector('.ion-page');
}
```
