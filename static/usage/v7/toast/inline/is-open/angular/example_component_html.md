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
    message="Click the 'Close' button to dismiss"
    [buttons]="toastButtons"
  ></ion-toast>
</ion-content>
```
