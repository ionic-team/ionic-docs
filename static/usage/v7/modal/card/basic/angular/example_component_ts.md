```ts
import { Component } from '@angular/core';
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [
    IonAvatar,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonImg,
    IonItem,
    IonLabel,
    IonList,
    IonModal,
    IonTitle,
    IonToolbar,
  ],
})
export class ExampleComponent {
  // Typically referenced to your ion-router-outlet
  presentingElement!: HTMLElement | null;

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }
}
```
