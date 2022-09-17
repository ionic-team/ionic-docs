```tsx
import React from 'react';
import { IonItem, IonLabel } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem href="#">
        <IonLabel>Anchor Item</IonLabel>
      </IonItem>

      <IonItem href="#" disabled={true}>
        <IonLabel>Disabled Anchor Item</IonLabel>
      </IonItem>

      <IonItem button>
        <IonLabel>Button Item</IonLabel>
      </IonItem>

      <IonItem button disabled={true}>
        <IonLabel>Disabled Button Item</IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```
