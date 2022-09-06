```html
<ion-item href="#" (click)="testClick($event)">
  <ion-label>Anchor Item</ion-label>
</ion-item>

<ion-item href="#" disabled="true" (click)="testClick($event)">
  <ion-label>Disabled Anchor Item</ion-label>
</ion-item>

<ion-item button (click)="testClick($event)">
  <ion-label>Button Item</ion-label>
</ion-item>

<ion-item button disabled="true" (click)="testClick($event)">
  <ion-label>Disabled Button Item</ion-label>
</ion-item>
```
