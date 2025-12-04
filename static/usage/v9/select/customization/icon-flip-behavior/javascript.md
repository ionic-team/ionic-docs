```html
<ion-list>
  <ion-item>
    <ion-select
      class="always-flip"
      toggle-icon="caret-down-sharp"
      interface="popover"
      label="Icon flips on both modes"
      placeholder="Select fruit"
    >
      <ion-select-option value="apples">Apples</ion-select-option>
      <ion-select-option value="oranges">Oranges</ion-select-option>
      <ion-select-option value="bananas">Bananas</ion-select-option>
    </ion-select>
  </ion-item>
  <ion-item>
    <ion-select
      class="never-flip"
      toggle-icon="caret-down-sharp"
      interface="popover"
      label="Icon never flips"
      placeholder="Select fruit"
    >
      <ion-select-option value="apples">Apples</ion-select-option>
      <ion-select-option value="oranges">Oranges</ion-select-option>
      <ion-select-option value="bananas">Bananas</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>

<style>
  ion-select.always-flip::part(icon) {
    transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ion-select.always-flip.select-expanded::part(icon) {
    transform: rotate(180deg);
  }

  ion-select.never-flip::part(icon) {
    transform: none;
  }
</style>
```
