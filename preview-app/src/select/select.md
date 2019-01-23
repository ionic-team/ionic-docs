## Select

The ion-select component is similar to an HTML `<select>` element, however, Ionic’s select component makes it easier for users to sort through and select the preferred option. It also matches the look of the native Android and iOS select inputs. It must be wrapped in an `ion-item`.

```html
<ion-item>
  <ion-label>Hair Color</ion-label>
  <ion-select value="brown" ok-text="Okay" cancel-text="Dismiss">
    <ion-select-option value="brown">Brown</ion-select-option>
    <ion-select-option value="blonde">Blonde</ion-select-option>
    <ion-select-option value="black">Black</ion-select-option>
    <ion-select-option value="red">Red</ion-select-option>
  </ion-select>
</ion-item>
```