```ts
import { Component } from '@angular/core';
import { IonDatetime } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonDatetime],
})
export class ExampleComponent {
  highlightedDates = [
    {
      date: '2023-01-05',
      textColor: '#800080',
      backgroundColor: '#ffc0cb',
      border: '1px solid #e91e63',
    },
    {
      date: '2023-01-10',
      textColor: '#09721b',
      backgroundColor: '#c8e5d0',
      border: '1px solid #4caf50',
    },
    {
      date: '2023-01-20',
      textColor: 'var(--ion-color-secondary)',
      backgroundColor: 'rgb(var(--ion-color-secondary-rgb), 0.18)',
      border: '1px solid var(--ion-color-secondary-shade)',
    },
    {
      date: '2023-01-23',
      textColor: 'rgb(68, 10, 184)',
      backgroundColor: 'rgb(211, 200, 229)',
      border: '1px solid rgb(103, 58, 183)',
    },
  ];
}
```
