```html
<ion-button (click)="presentPopover($event)">Click Me</ion-button>
<ion-popover #popover [isOpen]="isOpen" (didDismiss)="isOpen = false">
  <ng-template>
    <ion-content class="ion-padding">Hello World!</ion-content>
  </ng-template>
</ion-popover>
```