```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  public toastButtons = [
    {
      text: 'More Info',
      role: 'info',
      handler: () => { this.handlerMessage = 'More Info clicked'; }
    },
    {
      text: 'Dismiss',
      role: 'cancel',
      handler: () => { this.handlerMessage = 'Dismiss clicked'; }
    }
  ];
  handlerMessage = '';
  roleMessage = '';

  setRoleMessage(ev) {
    const { role } = ev.detail
    this.roleMessage = `Dismissed with role: ${role}`;
  }
}
```