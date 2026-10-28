```tsx
import React, { useState } from 'react';
import { IonInputOtp } from '@ionic/react';

function Example() {
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const validate = (value: string) => {
    setIsValid(value.length === 4);
  };

  const markTouched = () => {
    setIsTouched(true);
  };

  return (
    <IonInputOtp
      className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
      helperText="Enter the code sent to your email"
      errorText="Enter all 4 digits"
      onIonInput={(event) => validate(event.detail.value ?? '')}
      onIonBlur={() => markTouched()}
    ></IonInputOtp>
  );
}
export default Example;
```
