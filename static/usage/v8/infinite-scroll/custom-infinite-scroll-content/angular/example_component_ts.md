```tsx
import { Component, OnInit } from '@angular/core';
import { IonAvatar, IonContent, IonInfiniteScroll, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';

import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.scss'],
  imports: [IonAvatar, IonContent, IonInfiniteScroll, IonItem, IonLabel, IonList],
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
