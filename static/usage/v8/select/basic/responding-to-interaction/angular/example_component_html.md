```html
<ion-list>
  <ion-item>
    <ion-select
      aria-label="Fruit"
      placeholder="Select fruit"
      (ionChange)="handleChange($event)"
      (ionCancel)="handleCancel()"
      (ionDismiss)="handleDismiss()"
    >
      <ion-select-option value="apples">Apples</ion-select-option>
      <ion-select-option value="oranges">Oranges</ion-select-option>
      <ion-select-option value="bananas">Bananas</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>
```
