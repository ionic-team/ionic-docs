```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  handlerMessage = '';
  roleMessage = '';

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => { this.handlerMessage = 'Alert canceled'; }
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => { this.handlerMessage = 'Alert confirmed'; }
    }
  ];

  setResult(ev) {
    this.roleMessage = `Dismissed with role: ${ev.detail.role}`;
  }
}
```
