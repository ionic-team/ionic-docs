```tsx
import React from 'react';
import { IonInput, IonItem, IonList } from '@ionic/react';

function Example() {
  return (
    <>
      <IonList>
        <IonItem>
          <IonInput label="Text input" placeholder="Enter text"></IonInput>
        </IonItem>

        <div className="ion-padding-start">
          <IonInput label="Counter input" counter={true} maxlength={20}></IonInput>
        </div>
      </IonList>
    </>
  );
}
export default Example;
```
