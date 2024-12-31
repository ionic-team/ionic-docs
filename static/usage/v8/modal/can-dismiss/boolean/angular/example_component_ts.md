```ts
import { Component } from '@angular/core';
import {
  CheckboxCustomEvent,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonModal,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButton, IonButtons, IonCheckbox, IonContent, IonHeader, IonItem, IonModal, IonTitle, IonToolbar],
})
export class ExampleComponent {
  canDismiss = false;

  presentingElement!: HTMLElement | null;

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  onTermsChanged(event: CheckboxCustomEvent) {
    this.canDismiss = event.detail.checked;
  }
}
```
