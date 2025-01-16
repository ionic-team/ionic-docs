```ts
import { Component } from '@angular/core';
import { IonContent, ScrollDetail } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonContent],
})
export class ExampleComponent {
  handleScrollStart() {
    console.log('scroll start');
  }

  handleScroll(event: CustomEvent<ScrollDetail>) {
    console.log('scroll', JSON.stringify(event.detail));
  }

  handleScrollEnd() {
    console.log('scroll end');
  }
}
```
