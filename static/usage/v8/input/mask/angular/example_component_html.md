```html
<ion-list>
  <ion-item>
    <ion-input
      label="Card number"
      placeholder="0000 0000 0000 0000"
      [maskito]="cardMask"
      [maskitoElement]="maskPredicate"
    ></ion-input>
  </ion-item>
  <ion-item>
    <ion-input
      label="US phone number"
      placeholder="+1 (xxx) xxx-xxxx"
      [(ngModel)]="myPhoneNumber"
      [maskito]="phoneMask"
      [maskitoElement]="maskPredicate"
    ></ion-input>
  </ion-item>
</ion-list>
```
