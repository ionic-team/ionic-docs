```tsx
import React from 'react';
import { IonInputOtp } from '@ionic/react';

function Example() {
  return (
    <>
      <IonInputOtp pattern="[1-4]"> Numbers 1-4 only </IonInputOtp>
      <IonInputOtp type="text" pattern="[A-Za-z]"> Letters only </IonInputOtp>
      <IonInputOtp type="text" pattern="[D-L]" autocapitalize="on"> Letters D-L only </IonInputOtp>
    </>
  );
}
export default Example;
```
