```html
<ion-list>
  <ion-item>
    <ion-select
      [compareWith]="compareWith"
      placeholder="Select food"
      (ionChange)="handleChange($event)"
    >
      <ion-select-option *ngFor="let food of foods" [value]="food">{{ food.name }}</ion-select-option>
    </ion-select>
  </ion-item>
  <ion-item lines="none">
    <ion-label>Current value: {{ currentFood | json }}</ion-label>
  </ion-item>
</ion-list>
```