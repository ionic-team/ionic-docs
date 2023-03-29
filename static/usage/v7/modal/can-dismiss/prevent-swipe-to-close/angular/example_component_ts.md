```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }
}
```
