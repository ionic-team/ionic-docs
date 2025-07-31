```html
<ion-list>
  <ion-radio-group value="truncated">
    <ion-item>
      <ion-radio value="truncated">Truncated with ellipsis by default</ion-radio>
    </ion-item>
    <ion-item>
      <ion-radio value="wrapped" class="wrapped">`text-wrap` applied to `label` shadow part</ion-radio>
    </ion-item>
  </ion-radio-group>
</ion-list>

<style>
  ion-list {
    width: 250px;
  }

  ion-radio.wrapped::part(label) {
    text-wrap: wrap;
  }
</style>
```
