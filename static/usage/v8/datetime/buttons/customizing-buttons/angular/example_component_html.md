```html
<ion-datetime #datetime>
  <ion-buttons slot="buttons">
    <ion-button color="danger" (click)="datetime.reset()">Reset</ion-button>
    <ion-button color="primary" (click)="datetime.cancel()">Never mind</ion-button>
    <ion-button color="primary" (click)="datetime.confirm()">All Set</ion-button>
  </ion-buttons>
</ion-datetime>
```
