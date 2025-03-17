```html
<ion-button id="open-popover">Open Popover</ion-button>
<ion-popover [keepContentsMounted]="true" trigger="open-popover">
  <ng-template>
    <ion-content class="ion-padding">This content was mounted as soon as the popover was created.</ion-content>
  </ng-template>
</ion-popover>
```
