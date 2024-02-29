```ts
import { Component, ViewChild } from '@angular/core';
import { IonNav } from '@ionic/angular';

import { PageOneComponent } from './page-one.component';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  @ViewChild('nav') private nav: IonNav;

  onWillPresent() {
    this.nav.setRoot(PageOneComponent);
  }
}
```
