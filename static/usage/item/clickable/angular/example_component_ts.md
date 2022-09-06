```ts
import { Component } from '@angular/core';
import { CheckboxCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  testClick(ev: Event) {
    const target = ev.target as HTMLElement;
    console.log('Clicked item: ', target.textContent.trim());
  }
}
```
