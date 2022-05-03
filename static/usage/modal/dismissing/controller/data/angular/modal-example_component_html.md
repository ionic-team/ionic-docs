```html
<ion-header>
  <ion-toolbar>
    <ion-title>Modal</ion-title>
    <ion-button slot="end" fill="clear" (click)="dismiss(input.value)">Dismiss</ion-button>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-item>
    <ion-label>Enter your name</ion-label>
    <ion-input #input type="text" placeholder="Your name"></ion-input>
  </ion-item>
</ion-content>
```
