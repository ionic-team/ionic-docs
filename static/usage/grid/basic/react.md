```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

function Example() {
  return (
    <>
      <IonGrid>
        <IonRow>
          <IonCol>1 of 3</IonCol>
          <IonCol>2 of 3</IonCol>
          <IonCol>3 of 3</IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol>1 of 6</IonCol>
          <IonCol>2 of 6</IonCol>
          <IonCol>3 of 6</IonCol>
          <IonCol>4 of 6</IonCol>
          <IonCol>5 of 6</IonCol>
          <IonCol>6 of 6</IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol>1 of 12</IonCol>
          <IonCol>2 of 12</IonCol>
          <IonCol>3 of 12</IonCol>
          <IonCol>4 of 12</IonCol>
          <IonCol>5 of 12</IonCol>
          <IonCol>6 of 12</IonCol>
          <IonCol>7 of 12</IonCol>
          <IonCol>8 of 12</IonCol>
          <IonCol>9 of 12</IonCol>
          <IonCol>10 of 12</IonCol>
          <IonCol>11 of 12</IonCol>
          <IonCol>12 of 12</IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```
