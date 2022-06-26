```ts
import { Component } from '@angular/core';
import { CheckboxCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  canDismiss = false;

  presentingElement = null;

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  onTermsChanged(event: Event) {
    const ev = event as CheckboxCustomEvent;
    this.canDismiss = ev.detail.checked;
  }
}
```
