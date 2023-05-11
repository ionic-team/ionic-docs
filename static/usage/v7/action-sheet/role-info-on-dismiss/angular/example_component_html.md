```html
<div class="container">
  <ion-button id="open-action-sheet">Open</ion-button>
  <ion-action-sheet
    trigger="open-action-sheet"
    header="Example header"
    subHeader="Example subheader"
    [buttons]="actionSheetButtons"
    (didDismiss)="setResult($event)"
  ></ion-action-sheet>

  <code *ngIf="result">{{ result }}</code>
</div>
```
