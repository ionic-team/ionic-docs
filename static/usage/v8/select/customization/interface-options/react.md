```tsx
import React from 'react';
import { IonItem, IonLabel, IonList, IonSelect, IonSelectOption } from '@ionic/react';
function Example() {
  const customAlertOptions = {
    header: 'Pizza Toppings',
    subHeader: 'Select your favorite topping',
    message: 'Choose only one',
    translucent: true,
  };

  const customPopoverOptions = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color',
  };

  const customActionSheetOptions = {
    header: 'Colors',
    subHeader: 'Select your favorite color',
  };

  const customModalOptions = {
    header: 'Favorite Candy',
    breakpoints: [0, 0.5],
    initialBreakpoint: 0.5,
  };

  return (
    <IonList>
      <IonItem>
        <IonSelect label="Alert" interfaceOptions={customAlertOptions} interface="alert" placeholder="Select One">
          <IonSelectOption value="bacon">Bacon</IonSelectOption>
          <IonSelectOption value="onions">Onions</IonSelectOption>
          <IonSelectOption value="pepperoni">Pepperoni</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonSelect label="Popover" interfaceOptions={customPopoverOptions} interface="popover" placeholder="Select One">
          <IonSelectOption value="brown">Brown</IonSelectOption>
          <IonSelectOption value="blonde">Blonde</IonSelectOption>
          <IonSelectOption value="red">Red</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonSelect
          label="Action Sheet"
          interfaceOptions={customActionSheetOptions}
          interface="action-sheet"
          placeholder="Select One"
        >
          <IonSelectOption value="red">Red</IonSelectOption>
          <IonSelectOption value="green">Green</IonSelectOption>
          <IonSelectOption value="blue">Blue</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonSelect label="Modal" interfaceOptions={customModalOptions} interface="modal" placeholder="Select One">
          <IonSelectOption value="reese's">Reese's</IonSelectOption>
          <IonSelectOption value="snickers">Snickers</IonSelectOption>
          <IonSelectOption value="twix">Twix</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
