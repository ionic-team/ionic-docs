```html
<ion-header>
  <ion-toolbar>
    <ion-button class="ion-no-margin" slot="start" fill="clear" color="medium" (click)="cancel()">Cancel</ion-button>
    <ion-title>Welcome</ion-title>
    <ion-button class="ion-no-margin" slot="end" fill="clear" (click)="confirm()">Confirm</ion-button>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-item>
    <ion-label position="stacked">Your name</ion-label>
    <ion-input [(ngModel)]="name" placeholder="Your name"></ion-input>
  </ion-item>
</ion-content>
```
