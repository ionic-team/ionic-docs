```ts
import { Component } from '@angular/core';
import { ScrollDetail } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  handleScrollStart() {
    console.log('scroll start');
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    console.log('scroll', ev.detail);
  }

  handleScrollEnd() {
    console.log('scroll end');
  }
}
```
