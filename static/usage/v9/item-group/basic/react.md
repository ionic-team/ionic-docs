```tsx
import React from 'react';
import { IonItem, IonItemDivider, IonItemGroup, IonLabel } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItemGroup>
        <IonItemDivider>
          <IonLabel>A</IonLabel>
        </IonItemDivider>

        <IonItem>
          <IonLabel>Angola</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Argentina</IonLabel>
        </IonItem>
        <IonItem lines="none">
          <IonLabel>Armenia</IonLabel>
        </IonItem>
      </IonItemGroup>

      <IonItemGroup>
        <IonItemDivider>
          <IonLabel>B</IonLabel>
        </IonItemDivider>

        <IonItem>
          <IonLabel>Bangladesh</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Belarus</IonLabel>
        </IonItem>
        <IonItem lines="none">
          <IonLabel>Belgium</IonLabel>
        </IonItem>
      </IonItemGroup>
    </>
  );
}
export default Example;
```
