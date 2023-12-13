```html
<style>
  ion-modal {
    --height: auto;

    align-items: end;
  }

  ion-picker {
    margin-bottom: var(--ion-safe-area-bottom);
  }
</style>

<ion-button id="open-modal">Open modal</ion-button>

<ion-modal trigger="open-modal" is-open="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-button onclick="modal.dismiss(null, 'cancel')">Cancel</ion-button>
    </ion-buttons>
    <ion-buttons slot="end">
      <ion-button onclick="modal.dismiss(currentValue, 'confirm')">Done</ion-button>
    </ion-buttons>
  </ion-toolbar>
  <ion-picker>
    <ion-picker-column value="javascript">
      <ion-picker-column-option value="" disabled="true">--</ion-picker-column-option>
      <ion-picker-column-option value="javascript">Javascript</ion-picker-column-option>
      <ion-picker-column-option value="typescript">Typescript</ion-picker-column-option>
      <ion-picker-column-option value="rust">Rust</ion-picker-column-option>
      <ion-picker-column-option value="c#">C#</ion-picker-column-option>
    </ion-picker-column>
  </ion-picker>
</ion-modal>

<script>
  var modal = document.querySelector('ion-modal');
  var currentValue = 'javascript';

  modal.addEventListener('didDismiss', (event) => {
    console.log('didDismiss', JSON.stringify(event.detail));
  });

  var pickerColumn = document.querySelector('ion-picker-column');
  pickerColumn.addEventListener('ionChange', (event) => {
    currentValue = event.detail.value;
  });
</script>
```
