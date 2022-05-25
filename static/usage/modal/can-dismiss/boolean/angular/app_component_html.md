```html
<div class="ion-page">
  <ion-header>
    <ion-toolbar>
      <ion-title>App</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">Open</ion-button>
    <ion-modal #modal trigger="open-modal" [canDismiss]="canDismiss" [presentingElement]="presentingElement">
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
          <p class="ion-padding-horizontal">You must accept the terms and conditions to close this modal.</p>
          <ion-item>
            <ion-label class="ion-text-wrap" for="terms">Do you accept the terms and conditions?</ion-label>
            <ion-checkbox id="terms" (ionChange)="onTermsChanged($event)" [checked]="canDismiss"></ion-checkbox>
          </ion-item>
        </ion-content>
      </ng-template>
    </ion-modal>
  </ion-content>
</div>
```
