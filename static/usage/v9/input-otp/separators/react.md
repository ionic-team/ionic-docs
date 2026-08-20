```tsx
import React from 'react';
import { IonInputOtp } from '@ionic/react';

function Example() {
  return (
    <>
      <IonInputOtp separators="1,3">
        Didn't get a code? <a href="#">Resend the code</a>
      </IonInputOtp>
      <IonInputOtp separators="2">
        Didn't get a code? <a href="#">Resend the code</a>
      </IonInputOtp>
      <IonInputOtp separators="all">
        Didn't get a code? <a href="#">Resend the code</a>
      </IonInputOtp>
    </>
  );
}
export default Example;
```
