```ts
import { Component, ViewChild } from '@angular/core';
import { IonNav } from '@ionic/angular';

import { PageOneComponent } from './page-one.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  @ViewChild('nav') private nav: IonNav;

  onWillPresent() {
    this.nav.setRoot(PageOneComponent);
  }
}
```
