```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

function Example() {
  return (
    <>
      <b>Stacked for xs breakpoint, equal width for sm and up</b>
      <IonGrid>
        <IonRow>
          <IonCol size="12" size-sm="3">1 of 4</IonCol>
          <IonCol size="12" size-sm="3">2 of 4</IonCol>
          <IonCol size="12" size-sm="3">3 of 4</IonCol>
          <IonCol size="12" size-sm="3">4 of 4</IonCol>
        </IonRow>
      </IonGrid>

      <b>Equal width until md breakpoint, last column takes full width for md and up</b>
      <IonGrid>
        <IonRow>
          <IonCol size-md="6">1 of 3</IonCol>
          <IonCol size-md="6">2 of 3</IonCol>
          <IonCol size-md="12">3 of 3</IonCol>
        </IonRow>
      </IonGrid>

      <b>2 per row until md breakpoint, 3 per row for md, equal width for lg and up</b>
      <IonGrid>
        <IonRow>
          <IonCol size="6" size-md="4" size-lg="2">1 of 6</IonCol>
          <IonCol size="6" size-md="4" size-lg="2">2 of 6</IonCol>
          <IonCol size="6" size-md="4" size-lg="2">3 of 6</IonCol>
          <IonCol size="6" size-md="4" size-lg="2">4 of 6</IonCol>
          <IonCol size="6" size-md="4" size-lg="2">5 of 6</IonCol>
          <IonCol size="6" size-md="4" size-lg="2">6 of 6</IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```
