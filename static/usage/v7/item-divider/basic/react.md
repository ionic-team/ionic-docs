```tsx
import React from 'react';
import { IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItemGroup>
        <IonItemDivider>
          <IonLabel>
            Section A
          </IonLabel>
        </IonItemDivider>

        <IonItem>
          <IonLabel>A1</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>A2</IonLabel>
        </IonItem>
        <IonItem lines="none">
          <IonLabel>A3</IonLabel>
        </IonItem>
      </IonItemGroup>

      <IonItemGroup>
        <IonItemDivider>
          <IonLabel>
            Section B
          </IonLabel>
        </IonItemDivider>

        <IonItem>
          <IonLabel>B1</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>B2</IonLabel>
        </IonItem>
        <IonItem lines="none">
          <IonLabel>B3</IonLabel>
        </IonItem>
      </IonItemGroup>
    </IonList>
  );
}
export default Example;
```
