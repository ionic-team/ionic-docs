```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  private values: string[] = ['first', 'second', 'third'];

  accordionGroupChange = (event: any) => {
    const collapsedItems = this.values.filter((value) => value !== event.detail.value);
    const selectedValue = event.detail.value;

    console.log(
      `Expanded: ${selectedValue === undefined ? 'None' : event.detail.value} | Collapsed: ${collapsedItems.join(', ')}`
    );
  };
}
```
