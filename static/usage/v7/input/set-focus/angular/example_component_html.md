```html
<ion-list>
  <ion-item>
    <ion-button (click)="input.setFocus()">Click to set focus</ion-button>
  </ion-item>
  <ion-item>
    <ion-input #input label="Email" labelPlacement="floating"></ion-input>
  </ion-item>
</ion-list>
```
