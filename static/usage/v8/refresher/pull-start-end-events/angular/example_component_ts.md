```ts
import { Component } from '@angular/core';
import {
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  RefresherCustomEvent,
  RefresherPullEndCustomEvent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [
    IonCheckbox,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonRefresher,
    IonRefresherContent,
    IonTitle,
    IonToolbar,
  ],
})
export class ExampleComponent {
  items = [
    { label: 'Finalize Q1 budget proposal', checked: false, disabled: false },
    { label: 'Review design mockups', checked: true, disabled: false },
    { label: 'Sync with engineering on API docs', checked: true, disabled: false },
    { label: 'Approve PTO requests for March', checked: false, disabled: false },
    { label: 'Draft monthly newsletter', checked: false, disabled: false },
  ];

  constructor() {}

  handlePullStart() {
    console.log('Pull started');

    // Disable the checkboxes when the pull starts
    this.items.forEach((item) => {
      item.disabled = true;
    });
  }

  handlePullEnd(event: RefresherPullEndCustomEvent) {
    console.log('Pull ended with reason: "' + event.detail.reason + '"');

    // Enable the checkboxes when the pull ends
    this.items.forEach((item) => {
      item.disabled = false;
    });
  }

  handleRefresh(event: RefresherCustomEvent) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
      console.log('Refresh completed');
    }, 2000);
  }
}
```
