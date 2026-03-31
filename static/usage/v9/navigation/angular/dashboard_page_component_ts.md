```ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
  IonRouterLink,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: 'dashboard-page.component.html',
  imports: [IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar, IonRouterLink, RouterLink],
})
export class DashboardPageComponent {
  items = [
    { id: '1', name: 'Item One' },
    { id: '2', name: 'Item Two' },
    { id: '3', name: 'Item Three' },
  ];
}
```
