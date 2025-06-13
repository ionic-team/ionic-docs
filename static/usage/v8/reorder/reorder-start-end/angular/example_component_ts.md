```ts
import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import {
  ReorderEndCustomEvent,
  IonItem,
  IonLabel,
  IonList,
  IonReorder,
  IonReorderGroup,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { caretDown, ellipse, warning } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, IonIcon],
})
export class ExampleComponent {
  items = [
    { label: 'Buy groceries', icon: 'warning', color: 'warning' },
    { label: 'Call the bank', icon: 'warning', color: 'warning' },
    { label: 'Finish project report', icon: 'ellipse', color: 'light' },
    { label: 'Book flight tickets', icon: 'ellipse', color: 'light' },
    { label: 'Read a book', icon: 'caret-down', color: 'secondary' },
  ];

  @ViewChildren('icon', { read: ElementRef }) icons!: QueryList<ElementRef<HTMLIonIconElement>>;

  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ caretDown, ellipse, warning });
  }

  handleReorderStart() {
    // Hide the icons when the reorder starts
    console.log('handleReorderStart');
    this.icons.forEach((icon) => {
      icon.nativeElement.style.opacity = '0';
    });
  }

  handleReorderEnd(event: ReorderEndCustomEvent) {
    // Show the icons again
    this.icons.forEach((icon) => {
      icon.nativeElement.style.opacity = '1';
    });

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  }
}
```
