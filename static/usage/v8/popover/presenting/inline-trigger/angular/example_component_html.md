```html
<ion-button id="click-trigger">Left-Click Me</ion-button>
<ion-popover trigger="click-trigger" triggerAction="click">
  <ng-template>
    <ion-content class="ion-padding">Hello World!</ion-content>
  </ng-template>
</ion-popover>

<ion-button id="context-menu-trigger">Right-Click Me</ion-button>
<ion-popover trigger="context-menu-trigger" triggerAction="context-menu">
  <ng-template>
    <ion-content class="ion-padding">Hello World!</ion-content>
  </ng-template>
</ion-popover>

<ion-button id="hover-trigger">Hover Over Me</ion-button>
<ion-popover trigger="hover-trigger" triggerAction="hover">
  <ng-template>
    <ion-content class="ion-padding">Hello World!</ion-content>
  </ng-template>
</ion-popover>
```
