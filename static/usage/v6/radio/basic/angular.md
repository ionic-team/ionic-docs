```html
<ion-list>
  <ion-radio-group value="strawberries">
    <ion-item>
      <ion-label>Grapes</ion-label>
      <ion-radio slot="end" value="grapes"></ion-radio>
    </ion-item>

    <ion-item>
      <ion-label>Strawberries</ion-label>
      <ion-radio slot="end" value="strawberries"></ion-radio>
    </ion-item>

    <ion-item>
      <ion-label>Pineapple</ion-label>
      <ion-radio slot="end" value="pineapple"></ion-radio>
    </ion-item>

    <ion-item>
      <ion-label>Cherries (Disabled)</ion-label>
      <ion-radio slot="end" value="cherries" [disabled]="true"></ion-radio>
    </ion-item>
  </ion-radio-group>
</ion-list>
```
