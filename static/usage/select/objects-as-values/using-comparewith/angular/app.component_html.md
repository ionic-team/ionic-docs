```html
<ion-select
  [compareWith]="compareWith"
  placeholder="Select food"
  (ionChange)="handleChange($event)"
>
  <ion-select-option *ngFor="let food of foods" [value]="food">{{ food.name }}</ion-select-option>
</ion-select>
<ion-label class="ion-padding">Current value: {{ currentFood }}</ion-label>
```