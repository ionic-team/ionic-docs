```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-button (click)="cancelChanges()">Cancel</ion-button>
    </ion-buttons>
    <ion-title>{{ title }}</ion-title>
    <ion-buttons slot="end">
      <ion-button (click)="confirmChanges()">Done</ion-button>
    </ion-buttons>
  </ion-toolbar>
  <ion-toolbar>
    <ion-searchbar (ionInput)="searchbarInput($event)"></ion-searchbar>
  </ion-toolbar>
</ion-header>

<ion-content color="light" class="ion-padding">
  <ion-list id="modal-list" [inset]="true">
    <ion-item *ngFor="let item of filteredItems; trackBy: trackItems">
      <ion-label>{{ item.text }}</ion-label>
      <ion-checkbox
        [value]="item.value"
        [checked]="isChecked(item.value)"
        (ionChange)="checkboxChange($event)"
      ></ion-checkbox>
    </ion-item>
  </ion-list>
</ion-content>
```
