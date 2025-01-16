```tsx
import { Component, OnInit } from '@angular/core';
import {
  IonAvatar,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonAvatar, IonContent, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList],
})
export class ExampleComponent implements OnInit {
  items: string[] = [];

  ngOnInit() {
    for (let i = 1; i < 51; i++) {
      this.items.push(`Item ${i}`);
    }
  }
}
```
