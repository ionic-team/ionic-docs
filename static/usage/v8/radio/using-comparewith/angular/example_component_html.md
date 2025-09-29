```html
<ion-list>
  <ion-radio-group [compareWith]="compareWith" (ionChange)="handleChange($event)">
    @for (food of foods; track food.id) {
    <ion-item>
      <ion-radio [value]="food">{{ food.name }}</ion-radio>
    </ion-item>
    }
  </ion-radio-group>
</ion-list>
```
