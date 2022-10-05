```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol offset="3">2 (offset="3")</IonCol>
          <IonCol>3</IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>4</IonCol>
          <IonCol offset="2">5 (offset="2")</IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol size="2" offset="4">1 (offset="4")</IonCol>
          <IonCol size="2">2</IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```
