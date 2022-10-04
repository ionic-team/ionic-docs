```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

function Example() {
  return (
    <>
      <IonGrid>
        <IonRow>
          <IonCol>1 of 3</IonCol>
          <IonCol offset="3">2 of 3 (offset="3")</IonCol>
          <IonCol>3 of 3</IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol>1 of 5</IonCol>
          <IonCol>2 of 5</IonCol>
          <IonCol>3 of 5</IonCol>
          <IonCol>4 of 5</IonCol>
          <IonCol offset="2">5 of 5 (offset="2")</IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol size="2" offset="4">1 of 2 (offset="4")</IonCol>
          <IonCol size="2">2 of 2</IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```
