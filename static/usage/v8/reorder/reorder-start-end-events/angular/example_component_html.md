```html
<ion-list>
  <!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
  <!-- Casting $event to $any is a temporary fix for this bug https://github.com/ionic-team/ionic-framework/issues/24245 -->
  <ion-reorder-group
    [disabled]="false"
    (ionReorderStart)="handleReorderStart()"
    (ionReorderEnd)="handleReorderEnd($any($event))"
  >
    @for (item of items; track item; let i = $index) {
    <ion-item>
      <ion-label>{{ item.label }}</ion-label>
      <ion-icon #icon [name]="item.icon" [color]="item.color" slot="end"></ion-icon>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>
    }
  </ion-reorder-group>
</ion-list>
```
