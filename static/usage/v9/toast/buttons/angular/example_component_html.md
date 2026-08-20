```html
<ion-button id="open-toast">Open Toast</ion-button>
<ion-toast
  trigger="open-toast"
  message="Hello World!"
  [duration]="3000"
  [buttons]="toastButtons"
  (didDismiss)="setRoleMessage($event)"
></ion-toast>
```
