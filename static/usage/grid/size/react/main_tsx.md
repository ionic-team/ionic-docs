```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <b>Column 2 has <code>size</code> set to <code>"8"</code></b>
      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol size="8">2</IonCol>
          <IonCol>3</IonCol>
        </IonRow>
      </IonGrid>

      <b>Columns 3 & 4 have <code>size</code> set to <code>"3"</code></b>
      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol size="3">3</IonCol>
          <IonCol size="3">4</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
        </IonRow>
      </IonGrid>

      <b>Columns 1 & 2 have <code>size</code> set to <code>"4"</code></b>
      <IonGrid>
        <IonRow>
          <IonCol size="4">1</IonCol>
          <IonCol size="4">2</IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```
