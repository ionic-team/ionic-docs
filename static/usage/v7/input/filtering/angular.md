```html
<ion-list>
  <ion-item>
    <ion-input
      label="Alphanumeric Characters" 
      [value]="inputModel"
      (ionChange)="onInput($event)"
      #ionInput
    ></ion-input>
  </ion-item>
</ion-list>
```
