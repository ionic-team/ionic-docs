```html
<ion-header>
  <ion-toolbar>
    <ion-title>Modal Navigation</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="openModal">Open Modal</ion-button>
  <ion-modal #modal trigger="openModal" (willPresent)="onWillPresent()">
    <ng-template>
      <ion-header>
        <ion-toolbar>
          <ion-title>Modal</ion-title>
          <ion-buttons slot="end">
            <ion-button (click)="modal.dismiss()"> Close </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-nav #nav></ion-nav>
      </ion-content>
    </ng-template>
  </ion-modal>
</ion-content>
```
