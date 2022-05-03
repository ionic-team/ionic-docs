```html
<ion-header>
  <ion-toolbar>
    <ion-button slot="start" fill="clear" (click)="dismiss('cancel')">Cancel</ion-button>
    <ion-title>Modal</ion-title>
    <ion-button slot="end" fill="clear" (click)="dismiss('confirm')">Confirm</ion-button>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <p>Select a button to dismiss the modal.</p>
</ion-content>
```
