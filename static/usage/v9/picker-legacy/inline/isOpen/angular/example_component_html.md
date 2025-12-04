```html
<ion-button (click)="setOpen(true)">Open</ion-button>
<ion-picker-legacy
  [isOpen]="isPickerOpen"
  [columns]="pickerColumns"
  [buttons]="pickerButtons"
  (didDismiss)="setOpen(false)"
></ion-picker-legacy>
```
