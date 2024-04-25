```html
<ion-list>
  <ion-item>
    <ion-input
      label="Alphanumeric Characters"
      [value]="inputModel"
      (ionInput)="onInput($event)"
      #ionInputEl
    ></ion-input>
  </ion-item>
</ion-list>
```
