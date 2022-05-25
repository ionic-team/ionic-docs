```html
<div class="ion-page">
  <ion-header>
    <ion-toolbar>
      <ion-title>App</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">Open</ion-button>
    <ion-modal #modal trigger="open-modal" [swipeToClose]="true" [canDismiss]="canDismiss">
      <ng-template>
        <ion-header>
          <ion-toolbar>
            <ion-title>Modal</ion-title>
            <ion-button class="ion-no-margin" slot="end" fill="clear" (click)="modal.dismiss()">Close</ion-button>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <p>You will be prompted when closing this modal.</p>
        </ion-content>
      </ng-template>
    </ion-modal>
  </ion-content>
</div>
```
