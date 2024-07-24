```tsx
import React from 'react';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonSelect
          aria-label="Fruit"
          placeholder="Select fruit"
          onIonChange={(e) => console.log(`ionChange fired with value: ${e.detail.value}`)}
          onIonCancel={() => console.log('ionCancel fired')}
          onIonDismiss={() => console.log('ionDismiss fired')}
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
