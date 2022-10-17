```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <b>Column 1 has <code>push</code> set to <code>"4"</code> and column 2 has <code>pull</code> set to <code>"4"</code></b>
      <IonGrid>
        <IonRow>
          <IonCol push="4">1</IonCol>
          <IonCol pull="4">2</IonCol>
          <IonCol>3</IonCol>
        </IonRow>
      </IonGrid>

      <b>Column 2 has <code>push</code> set to <code>"4"</code> and column 3 & 4 have <code>pull</code> set to <code>"2"</code></b>
      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol push="4">2</IonCol>
          <IonCol pull="2">3</IonCol>
          <IonCol pull="2">4</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
        </IonRow>
      </IonGrid>

      <b>Column 1 has <code>push</code> set to <code>"3"</code> and column 2 has <code>pull</code> set to <code>"9"</code></b>
      <IonGrid>
        <IonRow>
          <IonCol size="9" push="3">1</IonCol>
          <IonCol size="3" pull="9">2</IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```
