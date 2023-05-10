```html
<ion-content color="light">
  <ion-list [inset]="true">
    <ion-item [button]="true" [detail]="false" id="select-fruits">
      <ion-label>Favorite Fruits</ion-label>
      <div slot="end" id="selected-fruits">{{ selectedFruitsText }}</div>
    </ion-item>
  </ion-list>
</ion-content>

<ion-modal trigger="select-fruits" #modal>
  <ng-template>
    <app-typeahead
      class="ion-page"
      title="Favorite Fruits"
      [items]="fruits"
      [selectedItems]="selectedFruits"
      (selectionChange)="fruitSelectionChanged($event)"
      (selectionCancel)="modal.dismiss()"
    ></app-typeahead>
  </ng-template>
</ion-modal>
```
