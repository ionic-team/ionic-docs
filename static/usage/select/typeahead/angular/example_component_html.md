```html
<ion-content color="light">
  <ion-list [inset]="true">
    <ion-item [button]="true" [detail]="false" id="select-fruit">
      <ion-label>Favorite Fruit</ion-label>
      <div slot="end" id="selected-fruit">{{ selectedFruit }}</div>
    </ion-item>
  </ion-list>
</ion-content>

<ion-modal
  trigger="select-fruit"
  (willDismiss)="modalWillDismiss($event)"
  (didDismiss)="modalDidDismiss()"
  #modal
>
  <ng-template>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button (click)="dismissModal()">Cancel</ion-button>
        </ion-buttons>
        <ion-title>Favorite Fruit</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar (ionInput)="searchbarInput($event)"></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content color="light" class="ion-padding">
      <ion-list id="modal-list" [inset]="true">
        <ion-item
          *ngFor="let fruit of filteredFruits"
          [button]="true"
          [detail]="false"
          (click)="selectFruit(fruit)"
        >
          <ion-label>{{ fruit.text }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ng-template>
</ion-modal>
```