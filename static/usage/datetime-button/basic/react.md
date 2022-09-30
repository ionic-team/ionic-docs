```tsx
import React from 'react';
import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/react';
function Example() {
  return (
    <>
      <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
      
      <IonModal keepContentsMounted={true}>
        <IonDatetime id="datetime"></IonDatetime>
      </IonModal>
    </>
  );
}
export default Example;
```
