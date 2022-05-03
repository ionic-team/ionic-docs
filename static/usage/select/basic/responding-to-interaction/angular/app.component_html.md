```html
<ion-select
  placeholder="Select fruit"
  (ionChange)="handleChange($event)"
  (ionCancel)="pushLog('ionCancel fired')"
  (ionDismiss)="pushLog('ionDismiss fired')"
>
  <ion-select-option>Apples</ion-select-option>
  <ion-select-option>Oranges</ion-select-option>
  <ion-select-option>Bananas</ion-select-option>
</ion-select>
<div id="log" class="ion-padding">
  <p *ngFor="let log of logs">{{ log }}</p>
  <p>Events will log above</p>
</div>
```