```tsx
import React from 'react';
import { IonInputOtp } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonInputOtp class="custom" separators="all">
        Didn't get a code? <a href="#">Resend the code</a>
      </IonInputOtp>
      <IonInputOtp fill="solid" class="custom" separators="all">
        Didn't get a code? <a href="#">Resend the code</a>
      </IonInputOtp>
    </>
  );
}
export default Example;
```
