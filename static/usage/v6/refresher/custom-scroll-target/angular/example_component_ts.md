```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
})
export class ExampleComponent {
  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };
}
```
