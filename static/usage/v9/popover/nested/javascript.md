```html
<ion-button id="popover-button">Open Menu</ion-button>
<ion-popover trigger="popover-button" dismiss-on-select="true">
  <ion-content>
    <ion-list>
      <ion-item button="true" detail="false">Option 1</ion-item>
      <ion-item button="true" detail="false">Option 2</ion-item>
      <ion-item button="true" id="nested-trigger">More options...</ion-item>

      <ion-popover trigger="nested-trigger" dismiss-on-select="true" side="end">
        <ion-content>
          <ion-list>
            <ion-item button="true" detail="false">Nested option</ion-item>
          </ion-list>
        </ion-content>
      </ion-popover>
    </ion-list>
  </ion-content>
</ion-popover>
```
