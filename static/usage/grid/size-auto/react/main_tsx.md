```tsx
import React from 'react';
import { IonCol, IonGrid, IonInput, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonGrid>
        <IonRow>
          <IonCol size="auto">1 of 3 (size="auto")</IonCol>
          <IonCol>2 of 3</IonCol>
          <IonCol>3 of 3</IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol>1 of 6</IonCol>
          <IonCol>2 of 6</IonCol>
          <IonCol size="auto">
            3 of 6 (size="auto")
            <IonInput placeholder="default input"></IonInput>
          </IonCol>
          <IonCol>4 of 6</IonCol>
          <IonCol>5 of 6</IonCol>
          <IonCol>6 of 6</IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol>1 of 2</IonCol>
          <IonCol size="auto">2 of 2 (size="auto")</IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```
