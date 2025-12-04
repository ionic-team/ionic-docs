```html
<div class="ion-page">
  <ion-header>
    <ion-toolbar>
      <ion-title>App</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">Open</ion-button>
    <ion-modal
      #modal
      trigger="open-modal"
      [canDismiss]="canDismiss"
      [presentingElement]="presentingElement"
      (willPresent)="onWillPresent()"
    >
      <ng-template>
        <app-child [modal]="modal" (dismissChange)="onDismissChange($event)"></app-child>
      </ng-template>
    </ion-modal>
  </ion-content>
</div>
```
