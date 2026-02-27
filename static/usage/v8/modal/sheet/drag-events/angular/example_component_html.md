```html
<ion-header>
  <ion-toolbar>
    <ion-title>App</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">Open Sheet Modal</ion-button>

  <ion-modal
    #modal
    trigger="open-modal"
    [initialBreakpoint]="0.25"
    [breakpoints]="[0, 0.25, 0.5, 0.75, 1]"
    (ionDragStart)="onDragStart()"
    (ionDragMove)="onDragMove($event)"
    (ionDragEnd)="onDragEnd($event)"
  >
    <ng-template>
      <ion-content class="ion-padding">
        <div class="ion-margin-top">
          <ion-label>Drag the handle to adjust the modal's opacity based on a custom max opacity.</ion-label>
        </div>
      </ion-content>
    </ng-template>
  </ion-modal>
</ion-content>
```
