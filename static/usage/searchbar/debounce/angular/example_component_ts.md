```ts
import { Component, ElementRef, ViewChildren } from '@angular/core';
import { IonItem } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  @ViewChildren(IonItem, {read: ElementRef}) items;

  handleChange(event) {
    const query = event.target.value.toLowerCase();

    this.items.forEach((i) => {
      const item = i.nativeElement;
      const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
      item.style.display = shouldShow ? 'block' : 'none';
    });
  }
}
```
