```ts
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  constructor(private menuCtrl: MenuController) {}

  openFirstMenu() {
    // Open the menu by menu-id
    this.menuCtrl.enable(true, 'first-menu');
    this.menuCtrl.open('first-menu');
  }

  openSecondMenu() {
    // Open the menu by menu-id
    this.menuCtrl.enable(true, 'second-menu');
    this.menuCtrl.open('second-menu');
  }

  openEndMenu() {
    // Open the menu by side
    this.menuCtrl.open('end');
  }
}
```
