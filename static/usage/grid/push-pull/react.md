```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

function Example() {
  return (
    <>
      <IonGrid>
        <IonRow>
          <IonCol push="4">1 of 3 (push="4")</IonCol>
          <IonCol pull="4">2 of 3 (pull="4")</IonCol>
          <IonCol>3 of 3</IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol>1 of 6</IonCol>
          <IonCol push="4">2 of 6 (push="4")</IonCol>
          <IonCol pull="2">3 of 6 (pull="2")</IonCol>
          <IonCol pull="2">4 of 6 (pull="2")</IonCol>
          <IonCol>5 of 6</IonCol>
          <IonCol>6 of 6</IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol size="9" push="3">1 of 2</IonCol>
          <IonCol size="3" pull="9">2 of 2</IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```
