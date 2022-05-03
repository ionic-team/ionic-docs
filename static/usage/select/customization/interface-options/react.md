```tsx
import React from 'react';
import { IonItem, IonLabel, IonList, IonSelect, IonSelectOption } from '@ionic/react';
function Example() {
  const customAlertOptions = {
    header: 'Pizza Toppings',
    subHeader: 'Select your favorite topping',
    message: 'Choose only one',
    translucent: true
  };

  const customPopoverOptions = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color'
  };

  const customActionSheetOptions = {
    header: 'Colors',
    subHeader: 'Select your favorite color'
  };

  return (
    <IonList>        
      <IonItem>
        <IonLabel>Alert</IonLabel>
        <IonSelect interfaceOptions={customAlertOptions} interface="alert" placeholder="Select One">
          <IonSelectOption value="bacon">Bacon</IonSelectOption>
          <IonSelectOption value="onions">Onions</IonSelectOption>
          <IonSelectOption value="pepperoni">Pepperoni</IonSelectOption>
        </IonSelect>
      </IonItem>
          
      <IonItem>
        <IonLabel>Popover</IonLabel>
        <IonSelect interfaceOptions={customPopoverOptions} interface="popover" placeholder="Select One">
          <IonSelectOption value="brown">Brown</IonSelectOption>
          <IonSelectOption value="blonde">Blonde</IonSelectOption>
          <IonSelectOption value="red">Red</IonSelectOption>
        </IonSelect>
      </IonItem>
          
      <IonItem>
        <IonLabel>Action Sheet</IonLabel>
        <IonSelect interfaceOptions={customActionSheetOptions} interface="action-sheet" placeholder="Select One">
          <IonSelectOption value="red">Red</IonSelectOption>
          <IonSelectOption value="green">Green</IonSelectOption>
          <IonSelectOption value="blue">Blue</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
