```ts
import { Component } from '@angular/core';
import { CheckboxCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  canDismiss = false;

  presentingElement = null;

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  onTermsChanged(event: Event) {
    const event = event as CheckboxCustomEvent;
    this.canDismiss = event.detail.checked;
  }
}
```
