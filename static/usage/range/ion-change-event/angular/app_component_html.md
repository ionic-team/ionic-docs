```html
<ion-content>
  <ion-range (ionChange)="onIonChange($any($event))"></ion-range>
  <ion-label>ionChange emitted value: {{ lastEmittedValue }}</ion-label>
</ion-content>
```
