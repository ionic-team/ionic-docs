```tsx
import React from 'react';
import { IonItem, IonLabel, IonList, IonSelect, IonSelectOption } from '@ionic/react';
function Example() {
  return (
    <IonList>
      <IonItem>
        <IonSelect label="Alert Interface" placeholder="Select fruit" okText="Choose Fruit" cancelText="Cancel Choice">
          <IonSelectOption value="apples">Apples</IonSelectOption>
          <IonSelectOption value="oranges">Oranges</IonSelectOption>
          <IonSelectOption value="bananas">Bananas</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonSelect
          label="Action Sheet Interface"
          interface="action-sheet"
          placeholder="Select fruit"
          cancelText="Cancel Choice"
        >
          <IonSelectOption value="apples">Apples</IonSelectOption>
          <IonSelectOption value="oranges">Oranges</IonSelectOption>
          <IonSelectOption value="bananas">Bananas</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
