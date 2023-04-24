```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <b>Columns aligned at the start</b>
      <IonGrid>
        <IonRow class="ion-justify-content-start">
          <IonCol size="3">
            1
          </IonCol>
          <IonCol size="3">
            2
          </IonCol>
        </IonRow>
      </IonGrid>

      <b>Columns aligned at the center</b>
      <IonGrid>
        <IonRow class="ion-justify-content-center">
          <IonCol size="3">
            1
          </IonCol>
          <IonCol size="3">
            2
          </IonCol>
        </IonRow>
      </IonGrid>

      <b>Columns aligned at the end</b>
      <IonGrid>
        <IonRow class="ion-justify-content-end">
          <IonCol size="3">
            1
          </IonCol>
          <IonCol size="3">
            2
          </IonCol>
        </IonRow>
      </IonGrid>

      <b>Columns aligned with space around</b>
      <IonGrid>
        <IonRow class="ion-justify-content-around">
          <IonCol size="3">
            1
          </IonCol>
          <IonCol size="3">
            2
          </IonCol>
        </IonRow>
      </IonGrid>

      <b>Columns aligned with space between</b>
      <IonGrid>
        <IonRow class="ion-justify-content-between">
          <IonCol size="3">
            1
          </IonCol>
          <IonCol size="3">
            2
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```
