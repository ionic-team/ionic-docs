```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent implements OnInit {
  presentingElement = undefined;

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  };
}
```
