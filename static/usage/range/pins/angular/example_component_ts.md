```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  pinFormatter(value: number) {
    return `${value}%`;
  }
}
```
