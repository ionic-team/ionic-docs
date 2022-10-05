```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonGrid>
        <IonRow>
          <IonCol push="4">1 (push="4")</IonCol>
          <IonCol pull="4">2 (pull="4")</IonCol>
          <IonCol>3</IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol push="4">2 (push="4")</IonCol>
          <IonCol pull="2">3 (pull="2")</IonCol>
          <IonCol pull="2">4 (pull="2")</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol size="9" push="3">1</IonCol>
          <IonCol size="3" pull="9">2</IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```
