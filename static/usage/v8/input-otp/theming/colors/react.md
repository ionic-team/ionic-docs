```tsx
import React from 'react';
import { IonInputOtp } from '@ionic/react';

function Example() {
  return (
    <>
      <IonInputOtp length={2} color="primary">Primary</IonInputOtp>
      <IonInputOtp length={2} color="secondary">Secondary</IonInputOtp>
      <IonInputOtp length={2} color="tertiary">Tertiary</IonInputOtp>
      <IonInputOtp length={2} color="success">Success</IonInputOtp>
      <IonInputOtp length={2} color="warning">>Warning</IonInputOtp>
      <IonInputOtp length={2} color="danger">Danger</IonInputOtp>
      <IonInputOtp length={2} color="light">Light</IonInputOtp>
      <IonInputOtp length={2} color="medium">Medium</IonInputOtp>
      <IonInputOtp length={2} color="dark">Dark</IonInputOtp>
    </>
  );
}
export default Example;
```
