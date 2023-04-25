```html
<ion-item counter="true">
  <ion-label position="floating">Default Counter</ion-label>
  <ion-input maxlength="20"></ion-input>
</ion-item>

<ion-item id="custom-item" counter="true" [counterFormatter]="customCounterFormatter">
  <ion-label position="floating">Custom Counter Format</ion-label>
  <ion-input maxlength="20"></ion-input>
</ion-item>
```
