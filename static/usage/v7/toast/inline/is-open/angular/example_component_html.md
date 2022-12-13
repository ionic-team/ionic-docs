```html
<ion-header>
  <ion-toolbar>
    <ion-title>Inline Toast</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button expand="block" (click)="setOpen(true)">Open</ion-button>
  <ion-toast
    [isOpen]="isToastOpen"
    message="This toast will close in 5 seconds"
    [duration]="5000"
    (didDismiss)="setOpen(false)"
  ></ion-toast>
</ion-content>
```
