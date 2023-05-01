```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <b>Total number of columns is set to <code>6</code>, column <code>size</code> is set to <code>1</code></b>
      <IonGrid>
        <IonRow>
          <IonCol size="1">1</IonCol>
          <IonCol size="1">2</IonCol>
          <IonCol size="1">3</IonCol>
          <IonCol size="1">4</IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```
