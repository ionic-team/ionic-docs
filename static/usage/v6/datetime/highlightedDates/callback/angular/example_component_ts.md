```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  highlightedDates = (isoString) => {
    const date = new Date(isoString);
    const utcDay = date.getUTCDate();

    if(utcDay % 5 === 0) {
      return {
        color: '#800080',
        backgroundColor: '#ffc0cb',
      };
    }

    if(utcDay % 3 === 0) {
      return {
        color: '#0000ff',
        backgroundColor: '#add8e6',
      };
    }

    return undefined;
  };
}
```
