```html
<ion-modal #modal [isOpen]="true" (didDismiss)="onDidDismiss($event)">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-button (click)="modal.dismiss(null, 'cancel')">Cancel</ion-button>
    </ion-buttons>
    <ion-buttons slot="end">
      <ion-button (click)="modal.dismiss(currentValue, 'confirm')">Done</ion-button>
    </ion-buttons>
  </ion-toolbar>
  <ion-picker>
    <ion-picker-column [value]="currentValue" (ionChange)="onIonChange($event)">
      <ion-picker-column-option value="" disabled="true">--</ion-picker-column-option>
      <ion-picker-column-option value="javascript">Javascript</ion-picker-column-option>
      <ion-picker-column-option value="typescript">Typescript</ion-picker-column-option>
      <ion-picker-column-option value="rust">Rust</ion-picker-column-option>
      <ion-picker-column-option value="c#">C#</ion-picker-column-option>
    </ion-picker-column>
  </ion-picker>
</ion-modal>
```
