```html
<ion-button (click)="setOpen(true)">Click Me</ion-button>
<ion-alert
  [isOpen]="isAlertOpen"
  header="A Short Title Is Best"
  subHeader="A Sub Header Is Optional"
  message="A message should be a short, complete sentence."
  [buttons]="alertButtons"
  (didDismiss)="setOpen(false)"
></ion-alert>
```
