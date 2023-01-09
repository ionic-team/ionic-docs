```html
<div class="container">
  <ion-button (click)="setOpen(true)">Open</ion-button>
  <ion-action-sheet
    [isOpen]="isActionSheetOpen"
    header="Example header"
    subHeader="Example subheader"
    [buttons]="actionSheetButtons"
    (didDismiss)="setOpen(false)"
  ></ion-action-sheet>

  <code *ngIf="result">{{ result }}</code>
</div>
```
