```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  public highlightedDates = [
    {
      date: '2023-01-05',
      color: '#800080',
      backgroundColor: '#ffc0cb',
    },
    {
      date: '2023-01-10',
      color: '#09721b',
      backgroundColor: '#c8e5d0',
    },
    {
      date: '2023-01-20',
      color: '#0000ff',
      backgroundColor: '#add8e6',
    },
    {
      date: '2023-01-23',
      color: '#440ab8',
      backgroundColor: '#d3c8e5'
    }
  ];
}
```
