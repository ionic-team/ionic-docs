```html
<ion-button (click)="setOpen(true)">Open</ion-button>
<ion-action-sheet
  [isOpen]="isActionSheetOpen"
  header="Actions"
  [buttons]="actionSheetButtons"
  (didDismiss)="setOpen(false)"
></ion-action-sheet>
```
