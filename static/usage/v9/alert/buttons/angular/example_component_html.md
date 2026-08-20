```html
<ion-button id="present-alert">Click Me</ion-button>
<ion-alert
  trigger="present-alert"
  header="Alert!"
  [buttons]="alertButtons"
  (didDismiss)="setResult($event)"
></ion-alert>
```
