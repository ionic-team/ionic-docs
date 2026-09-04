```html
<ion-header>
  <ion-toolbar>
    <ion-title>App</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">Open Modal</ion-button>

  <ion-modal #modal trigger="open-modal">
    <ng-template>
      <ion-header>
        <ion-toolbar>
          <ion-title>Modal</ion-title>
          <ion-buttons slot="end">
            <ion-button (click)="modal.dismiss()">Close</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list lines="full">
          @for (item of ['Item 1', 'Item 2', 'Item 3']; track item) {
          <ion-item>
            <ion-label>{{ item }}</ion-label>
          </ion-item>
          }
        </ion-list>
      </ion-content>
    </ng-template>
  </ion-modal>
</ion-content>
```
