```tsx
import React from 'react';
import { IonInputOtp } from '@ionic/react';

function Example() {
  return (
    <>
      <IonInputOtp>
        Didn't get a code? <a href="#">Resend the code</a>
      </IonInputOtp>
      <IonInputOtp length="6">
        Didn't get a code? <a href="#">Resend the code</a>
      </IonInputOtp>
    </>
  );
}
export default Example;
```
