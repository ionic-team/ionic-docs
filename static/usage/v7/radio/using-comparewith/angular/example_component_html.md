```html
<ion-list>
  <ion-radio-group [compareWith]="compareWith" (ionChange)="handleChange($event)">
    <ion-item *ngFor="let food of foods; trackBy: trackItems">
      <ion-radio [value]="food">{{ food.name }}</ion-radio>
    </ion-item>
  </ion-radio-group>
</ion-list>
```
