```html
<ion-list>
  <ion-item>
    <ion-select
      aria-label="Food"
      [compareWith]="compareWith"
      placeholder="Select food"
      (ionChange)="handleChange($event)"
      [multiple]="true"
    >
      @for (food of foods; track food) {
      <ion-select-option [value]="food">{{ food.name }}</ion-select-option>
      }
    </ion-select>
  </ion-item>
</ion-list>
```
