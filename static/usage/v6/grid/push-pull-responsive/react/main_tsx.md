```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <b>No change for xs breakpoint, push 1st column & pull 2nd column for sm and up</b>
      <IonGrid>
        <IonRow>
          <IonCol push-sm="6">1</IonCol>
          <IonCol pull-sm="6">2</IonCol>
        </IonRow>
      </IonGrid>

      <b>No change for xs breakpoint, push middle columns & pull last column for md and up</b>
      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol push-md="3">2</IonCol>
          <IonCol push-md="3">3</IonCol>
          <IonCol pull-md="6">4</IonCol>
        </IonRow>
      </IonGrid>

      <b>Switch first and last 3 columns for xs breakpoints, reverse columns for lg and up</b>
      <IonGrid>
        <IonRow>
          <IonCol push="6" push-lg="10">1</IonCol>
          <IonCol push="6" push-lg="6">2</IonCol>
          <IonCol push="6" push-lg="2">3</IonCol>
          <IonCol pull="6" pull-lg="2">4</IonCol>
          <IonCol pull="6" pull-lg="6">5</IonCol>
          <IonCol pull="6" pull-lg="10">6</IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```
