```html
<ion-header>
  <ion-toolbar>
    <ion-title>App</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">Open Sheet Modal</ion-button>

  <ion-modal trigger="open-modal" [initialBreakpoint]="1" [breakpoints]="[0, 1]">
    <ng-template>
      <div class="block">Block of Content</div>
    </ng-template>
  </ion-modal>
</ion-content>
```
