```html
<ion-header>
  <ion-toolbar>
    <ion-title>Inline Modal</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <p class="ion-text-center">{{ message }}</p>
  <ion-modal #modal is-open="true" (didDismiss)="onModalDismissed($event)">
    <ng-template>
      <ion-header>
        <ion-toolbar>
          <ion-toolbar>
            <ion-button slot="start" fill="clear" (click)="modal.dismiss(null, 'cancel')">Cancel</ion-button>
            <ion-title>Modal</ion-title>
            <ion-button slot="end" fill="clear" (click)="modal.dismiss(null, 'confirm')">Confirm</ion-button>
          </ion-toolbar>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <p>Select a button to dismiss the modal.</p>
      </ion-content>
    </ng-template>
  </ion-modal>
</ion-content>
```
