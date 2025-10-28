```html
<ion-list lines="full">
  <!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
  <!-- Casting $event to $any is a temporary fix for this bug https://github.com/ionic-team/ionic-framework/issues/24245 -->
  <ion-reorder-group
    [disabled]="false"
    (ionReorderMove)="handleReorderMove($any($event))"
    (ionReorderEnd)="handleReorderEnd($any($event))"
  >
    @for (item of items; track item; let i = $index) {
    <ion-item [id]="'item-' + (i + 1)">
      <b slot="start">{{ i + 1 }}</b>
      <ion-label>{{ item }}</ion-label>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>
    }
  </ion-reorder-group>
</ion-list>
```
