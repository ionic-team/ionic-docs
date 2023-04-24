```tsx
import { Component, OnInit } from '@angular/core';

import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.scss'],
})
export class ExampleComponent implements OnInit {
  items = [];

  ngOnInit() {
    for (let i = 1; i < 51; i++) {
      this.items.push(`Item ${i}`);
    }
  }
}
```
