```html
<ion-list>
  <ion-item>
    <ion-select label="Alert" id="customAlertSelect" interface="alert" placeholder="Select One">
      <ion-select-option value="bacon">Bacon</ion-select-option>
      <ion-select-option value="onions">Onions</ion-select-option>
      <ion-select-option value="pepperoni">Pepperoni</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-select label="Popover" id="customPopoverSelect" interface="popover" placeholder="Select One">
      <ion-select-option value="brown">Brown</ion-select-option>
      <ion-select-option value="blonde">Blonde</ion-select-option>
      <ion-select-option value="red">Red</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-select label="Action Sheet" id="customActionSheetSelect" interface="action-sheet" placeholder="Select One">
      <ion-select-option value="red">Red</ion-select-option>
      <ion-select-option value="green">Green</ion-select-option>
      <ion-select-option value="blue">Blue</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-select label="Modal" id="customModalSelect" interface="modal" placeholder="Select One">
      <ion-select-option value="reese's">Reese's</ion-select-option>
      <ion-select-option value="snickers">Snickers</ion-select-option>
      <ion-select-option value="twix">Twix</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>

<script>
  const customAlertSelect = document.getElementById('customAlertSelect');
  const customAlertOptions = {
    header: 'Pizza Toppings',
    subHeader: 'Select your favorite topping',
    message: 'Choose only one',
    translucent: true,
  };
  customAlertSelect.interfaceOptions = customAlertOptions;

  const customPopoverSelect = document.getElementById('customPopoverSelect');
  const customPopoverOptions = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color',
  };
  customPopoverSelect.interfaceOptions = customPopoverOptions;

  const customActionSheetSelect = document.getElementById('customActionSheetSelect');
  const customActionSheetOptions = {
    header: 'Colors',
    subHeader: 'Select your favorite color',
  };
  customActionSheetSelect.interfaceOptions = customActionSheetOptions;

  const customModalSelect = document.getElementById('customModalSelect');
  const customModalOptions = {
    header: 'Favorite Candy',
    breakpoints: [0, 0.5],
    initialBreakpoint: 0.5,
  };
  customModalSelect.interfaceOptions = customModalOptions;
</script>
```
