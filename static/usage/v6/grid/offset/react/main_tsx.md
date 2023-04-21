```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <b>Column 2 has <code>offset</code> set to <code>"3"</code></b>
      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol offset="3">2</IonCol>
          <IonCol>3</IonCol>
        </IonRow>
      </IonGrid>

      <b>Column 5 has <code>offset</code> set to <code>"2"</code></b>
      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>4</IonCol>
          <IonCol offset="2">5</IonCol>
        </IonRow>
      </IonGrid>

      <b>Column 1 has <code>offset</code> set to <code>"4"</code></b>
      <IonGrid>
        <IonRow>
          <IonCol size="2" offset="4">1</IonCol>
          <IonCol size="2">2</IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```
