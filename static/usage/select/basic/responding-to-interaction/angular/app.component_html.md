```html
<ion-select
  placeholder="Select fruit"
  (ionChange)="handleChange($event)"
  (ionCancel)="pushLog('ionCancel fired')"
  (ionDismiss)="pushLog('ionDismiss fired')"
>
  <ion-select-option value="apples">Apples</ion-select-option>
  <ion-select-option value="oranges">Oranges</ion-select-option>
  <ion-select-option value="bananas">Bananas</ion-select-option>
</ion-select>
<div id="log" class="ion-padding">
  <p *ngFor="let log of logs">{{ log }}</p>
  <p>Events will log above</p>
</div>
```