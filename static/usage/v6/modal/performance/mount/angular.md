```html
<ion-header>
  <ion-toolbar>
    <ion-title>Example</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">Open Modal</ion-button>
  <ion-modal [keepContentsMounted]="true" trigger="open-modal" #modal>
    <ng-template>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button (click)="modal.dismiss()">Cancel</ion-button>
          </ion-buttons>
          <ion-title>Modal</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        This content was mounted as soon as the modal was created.
      </ion-content>
    </ng-template>
  </ion-modal>
</ion-content>
```
