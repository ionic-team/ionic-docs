```html
<ion-header>
  <ion-toolbar>
    <ion-title>Page</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="modal-trigger">Present Modal</ion-button>
  <ion-modal trigger="modal-trigger" #modal>
    <ng-template>
      <ion-header>
        <ion-toolbar>
          <ion-title>Modal</ion-title>
          <ion-buttons slot="end">
            <ion-button (click)="closeModal()">Close</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding"> Modal Content </ion-content>
    </ng-template>
  </ion-modal>
</ion-content>
```
