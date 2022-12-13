```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  public toastButtons = [
    {
      text: 'Close',
      handler: () => {
        this.setOpen(false);
      }
    }
  ];
  isToastOpen = false;

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
}
```
