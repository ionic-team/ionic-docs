```ts
import { Component, ViewChild } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonNav,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { IonNav } from '@ionic/angular';

import { PageOneComponent } from './page-one.component';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonButton, IonButtons, IonContent, IonHeader, IonModal, IonNav, IonTitle, IonToolbar],
})
export class ExampleComponent {
  @ViewChild('nav') private nav: IonNav;

  onWillPresent() {
    this.nav.setRoot(PageOneComponent);
  }
}
```
