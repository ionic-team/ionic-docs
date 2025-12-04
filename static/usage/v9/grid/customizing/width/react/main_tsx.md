```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <IonGrid fixed={true}>
      <IonRow>
        <IonCol>1</IonCol>
        <IonCol>2</IonCol>
        <IonCol>3</IonCol>
      </IonRow>
    </IonGrid>
  );
}
export default Example;
```
