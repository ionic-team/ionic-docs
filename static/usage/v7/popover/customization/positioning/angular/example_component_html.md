```html
<div class="container">
  <ion-button id="top-center">Side=Top, Alignment=Center</ion-button>
  <ion-popover trigger="top-center" side="top" alignment="center">
    <ng-template>
      <ion-content class="ion-padding">Hello World!</ion-content>
    </ng-template>
  </ion-popover>

  <ion-button id="bottom-start">Side=Bottom, Alignment=Start</ion-button>
  <ion-popover trigger="bottom-start" side="bottom" alignment="start">
    <ng-template>
      <ion-content class="ion-padding">Hello World!</ion-content>
    </ng-template>
  </ion-popover>

  <ion-button id="left-start">Side=Left, Alignment=Start</ion-button>
  <ion-popover trigger="left-start" side="left" alignment="start">
    <ng-template>  
      <ion-content class="ion-padding">Hello World!</ion-content>
    </ng-template>
  </ion-popover>

  <ion-button id="right-end">Side=Right, Alignment=End</ion-button>
  <ion-popover trigger="right-end" side="right" alignment="end">
    <ng-template>
      <ion-content class="ion-padding">Hello World!</ion-content>
    </ng-template>
  </ion-popover>
</div>
```
