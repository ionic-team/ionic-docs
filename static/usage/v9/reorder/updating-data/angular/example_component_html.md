```html
<ion-list>
  <!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
  <!-- Casting $event to $any is a temporary fix for this bug https://github.com/ionic-team/ionic-framework/issues/24245 -->
  <ion-reorder-group [disabled]="false" (ionReorderEnd)="handleReorderEnd($any($event))">
    @for (item of items; track item) {
    <ion-item>
      <ion-label> Item {{ item }} </ion-label>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>
    }
  </ion-reorder-group>
</ion-list>
```
