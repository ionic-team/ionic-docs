```tsx
import React, { useState } from 'react';
import { clsx } from 'clsx';

import { IonTextarea } from '@ionic/react';

function Example() {
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const validateEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  };

  const validate = (event: Event) => {
    const value = (event.target as HTMLTextAreaElement).value;

    setIsValid(undefined);

    if (value === '') return;

    validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
  };

  const markTouched = () => {
    setIsTouched(true);
  };

  return (
    <IonTextarea
      className={clsx({
        'ion-valid': isValid,
        'ion-invalid': isValid === false,
        'ion-touched': isTouched,
      })}
      fill="solid"
      label="Email"
      labelPlacement="floating"
      helperText="Enter a valid email"
      errorText="Invalid email"
      onIonInput={(event) => validate(event)}
      onIonBlur={() => markTouched()}
    ></IonTextarea>
  );
}
export default Example;
```
