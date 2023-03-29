```ts
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  @ViewChild('listenerOut', { static: true }) listenerOut: ElementRef;
  private values: string[] = ['first', 'second', 'third'];

  accordionGroupChange = (ev: any) => {
    const nativeEl = this.listenerOut.nativeElement;
    if (!nativeEl) {
      return;
    }

    const collapsedItems = this.values.filter((value) => value !== ev.detail.value);
    const selectedValue = ev.detail.value;

    nativeEl.innerText = `
      Expanded: ${selectedValue === undefined ? 'None' : ev.detail.value}
      Collapsed: ${collapsedItems.join(', ')}
    `;
  };
}
```
