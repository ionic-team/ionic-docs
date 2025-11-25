```ts
import { Component, ViewChild } from '@angular/core';
import { IonicModule, IonNav } from '@ionic/angular';

import { PageOneComponent } from './page-one.component';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonicModule],
  standalone: true,
})
export class ExampleComponent {
  @ViewChild('nav') private nav: IonNav;

  onWillPresent() {
    this.nav.setRoot(PageOneComponent);
  }
}
```
