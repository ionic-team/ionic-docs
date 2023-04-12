```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <b>No offset for xs breakpoint, offset 1st column for sm and up</b>
      <IonGrid>
        <IonRow>
          <IonCol offset-sm="2">1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>4</IonCol>
          <IonCol>5</IonCol>
        </IonRow>
      </IonGrid>

      <b>No offset for xs breakpoint, offset last 3 columns for md and up</b>
      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol offset-md="2">2</IonCol>
          <IonCol offset-md="2">3</IonCol>
          <IonCol offset-md="2">4</IonCol>
        </IonRow>
      </IonGrid>

      <b>Offset all columns by 6 for xs breakpoint, offset by 4 for md, offset by 2 for lg and up</b>
      <IonGrid>
        <IonRow>
          <IonCol offset="6" offset-md="4" offset-lg="2">1</IonCol>
          <IonCol offset="6" offset-md="4" offset-lg="2">2</IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```
