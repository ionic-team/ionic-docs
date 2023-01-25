```tsx
import React from 'react';
import { IonSelect, IonSelectOption } from '@ionic/react';

function Example() {
  return (
    <>
      <IonSelect mode="md" label="Solid select" labelPlacement="floating" fill="solid">
        <IonSelectOption value="apple">Apple</IonSelectOption>
        <IonSelectOption value="banana">Banana</IonSelectOption>
        <IonSelectOption value="orange">Orange</IonSelectOption>
      </IonSelect>
      
      <br />
      
      <IonSelect mode="md" label="Outline select" labelPlacement="floating" fill="outline">
        <IonSelectOption value="apple">Apple</IonSelectOption>
        <IonSelectOption value="banana">Banana</IonSelectOption>
        <IonSelectOption value="orange">Orange</IonSelectOption>
      </IonSelect>
    </>
  );
}
export default Example;
```
