```html
<div class="container">
  <ion-button id="open-action-sheet">Open</ion-button>
  <ion-action-sheet
    trigger="open-action-sheet"
    header="Example header"
    subHeader="Example subheader"
    [buttons]="actionSheetButtons"
    (didDismiss)="logResult($event)"
  ></ion-action-sheet>
</div>
```
