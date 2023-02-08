```html
<ion-header>
  <ion-toolbar>
    <ion-title>App</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">Open Sheet Modal</ion-button>

  <ion-modal
    trigger="open-modal"
    [initialBreakpoint]="0.25"
    [breakpoints]="[0, 0.25, 0.5, 0.75]"
    handleBehavior="cycle"
  >
    <ng-template>
      <ion-content class="ion-padding">
        <div class="ion-margin-top">
          <ion-label>Click the handle above to advance to the next breakpoint.</ion-label>
        </div>
      </ion-content>
    </ng-template>
  </ion-modal>
</ion-content>
```
