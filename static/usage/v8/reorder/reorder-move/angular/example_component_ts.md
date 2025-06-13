```ts
import { Component } from '@angular/core';
import {
  IonItem,
  IonLabel,
  IonList,
  IonReorder,
  IonReorderGroup,
  ReorderEndCustomEvent,
  ReorderMoveCustomEvent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonItem, IonLabel, IonList, IonReorder, IonReorderGroup],
})
export class ExampleComponent {
  items = ['Buy groceries', 'Call the bank', 'Finish project report', 'Book flight tickets', 'Read a book'];

  handleReorderMove(event: ReorderMoveCustomEvent) {
    const from = event.detail.from;
    const to = event.detail.to;

    // Get all items and sort by their current id (item-1, item-2, ...)
    const itemElements = Array.from(document.querySelectorAll('ion-item')).sort((a, b) => {
      const aNum = parseInt(a.id.replace('item-', ''), 10);
      const bNum = parseInt(b.id.replace('item-', ''), 10);
      return aNum - bNum;
    });

    // Dragging down: shift up items between from+1 and to, set dragged to to+1
    if (from < to) {
      for (let i = from; i <= to; i++) {
        const item = itemElements[i];
        const itemNum = item.querySelector('b');
        if (itemNum) {
          if (i === from) {
            // Dragged item
            itemNum.textContent = String(to + 1);
            item.id = `item-${to + 1}`;
          } else {
            // Items shift up
            itemNum.textContent = String(i);
            item.id = `item-${i}`;
          }
        }
      }
      // Dragging up: shift down items between to and from-1, set dragged to to+1
    } else if (from > to) {
      for (let i = to; i <= from; i++) {
        const item = itemElements[i];
        const itemNum = item.querySelector('b');
        if (itemNum) {
          if (i === from) {
            // Dragged item
            itemNum.textContent = String(to + 1);
            item.id = `item-${to + 1}`;
          } else {
            // Items shift down
            itemNum.textContent = String(i + 2);
            item.id = `item-${i + 2}`;
          }
        }
      }
    }
  }

  handleReorderEnd(event: ReorderEndCustomEvent) {
    // Finish the reorder and update the items data
    this.items = event.detail.complete(this.items);
  }
}
```
