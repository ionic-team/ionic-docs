```html
<ion-button (click)="setOpen(true)">Click Me</ion-button>
<ion-alert
  [isOpen]="isAlertOpen"
  header="Alert"
  subHeader="Important message"
  message="This is an alert!"
  [buttons]="alertButtons"
  (didDismiss)="setOpen(false)"
></ion-alert>
```