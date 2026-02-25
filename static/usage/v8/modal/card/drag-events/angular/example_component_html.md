```html
<div class="ion-page" #appPage>
  <ion-header>
    <ion-toolbar>
      <ion-title>App</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">Open Card Modal</ion-button>

    <ion-modal
      #modal
      trigger="open-modal"
      [presentingElement]="presentingElement"
      (ionModalWillPresent)="onModalWillPresent()"
      (ionDragStart)="onDragStart()"
      (ionDragMove)="onDragMove($event)"
      (ionDragEnd)="onDragEnd($event)"
      (ionModalWillDismiss)="onModalWillDismiss()"
    >
      <ng-template>
        <ion-header>
          <ion-toolbar>
            <ion-title>Modal</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <div class="ion-margin-top">
            <ion-label> Drag the handle to adjust the background brightness based on a custom brightness. </ion-label>
          </div>
        </ion-content>
      </ng-template>
    </ion-modal>
  </ion-content>
</div>
```
