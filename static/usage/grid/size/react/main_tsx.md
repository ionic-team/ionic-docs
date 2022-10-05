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
          <IonCol size="8">2 (size="8")</IonCol>
          <IonCol>3</IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol size="3">3 (size="3")</IonCol>
          <IonCol size="3">4 (size="3")</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol size="4">1 (size="4")</IonCol>
          <IonCol size="4">2 (size="4")</IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```
