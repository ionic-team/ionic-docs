```html
<ion-list>
  <ion-item>
    <ion-select label="Alert" [interfaceOptions]="customAlertOptions" interface="alert" placeholder="Select One">
      <ion-select-option value="bacon">Bacon</ion-select-option>
      <ion-select-option value="onions">Onions</ion-select-option>
      <ion-select-option value="pepperoni">Pepperoni</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-select label="Popover" [interfaceOptions]="customPopoverOptions" interface="popover" placeholder="Select One">
      <ion-select-option value="brown">Brown</ion-select-option>
      <ion-select-option value="blonde">Blonde</ion-select-option>
      <ion-select-option value="red">Red</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-select
      label="Action Sheet"
      [interfaceOptions]="customActionSheetOptions"
      interface="action-sheet"
      placeholder="Select One"
    >
      <ion-select-option value="red">Red</ion-select-option>
      <ion-select-option value="green">Green</ion-select-option>
      <ion-select-option value="blue">Blue</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-select label="Modal" [interfaceOptions]="customModalOptions" interface="modal" placeholder="Select One">
      <ion-select-option value="reese's">Reese's</ion-select-option>
      <ion-select-option value="snickers">Snickers</ion-select-option>
      <ion-select-option value="twix">Twix</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>
```
