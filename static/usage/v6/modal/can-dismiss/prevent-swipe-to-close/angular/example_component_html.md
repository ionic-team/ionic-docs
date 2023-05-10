```html
<div class="ion-page" #page>
  <ion-header>
    <ion-toolbar>
      <ion-title>App</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">Open</ion-button>
    <ion-modal #modal trigger="open-modal" [canDismiss]="canDismiss" [presentingElement]="page">
      <ng-template>
        <ion-header>
          <ion-toolbar>
            <ion-title>Modal</ion-title>
            <ion-buttons slot="end">
              <ion-button (click)="modal.dismiss()">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <p>
            To close this modal, please use the "Close" button provided. Note that swiping the modal will not dismiss
            it.
          </p>
        </ion-content>
      </ng-template>
    </ion-modal>
  </ion-content>
</div>
```
