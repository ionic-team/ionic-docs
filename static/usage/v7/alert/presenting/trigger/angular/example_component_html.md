```html
<ion-button id="present-alert">Click Me</ion-button>
<ion-alert
  trigger="present-alert"
  header="Alert"
  subHeader="Important message"
  message="This is an alert!"
  [buttons]="alertButtons"
></ion-alert>
```