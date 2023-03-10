```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  presentingElement = undefined;

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  canDismiss = async (data?: any, role?: string) => {
    return role !== 'gesture';
  };
}
```
