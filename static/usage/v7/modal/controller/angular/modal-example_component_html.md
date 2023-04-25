```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-button color="medium" (click)="cancel()">Cancel</ion-button>
    </ion-buttons>
    <ion-title>Welcome</ion-title>
    <ion-buttons slot="end">
      <ion-button (click)="confirm()" [strong]="true">Confirm</ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-item>
    <ion-input labelPlacement="stacked" label="Enter your name" [(ngModel)]="name" placeholder="Your name"></ion-input>
  </ion-item>
</ion-content>
```
