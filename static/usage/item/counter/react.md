```tsx
import React from 'react';
import { IonInput, IonItem, IonLabel } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem counter={true}>
        <IonLabel position="floating">Default Counter</IonLabel>
        <IonInput maxlength={20}></IonInput>
      </IonItem>

      <IonItem counter={true} counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
        <IonLabel position="floating">Custom Counter Format</IonLabel>
        <IonInput maxlength={20}></IonInput>
      </IonItem>
    </>
  );
}
export default Example;
```
