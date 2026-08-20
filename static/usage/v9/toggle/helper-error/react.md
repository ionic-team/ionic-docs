```tsx
import React, { useRef, useState } from 'react';
import { IonToggle, ToggleCustomEvent } from '@ionic/react';

function Example() {
  const wifiRef = useRef<HTMLIonToggleElement>(null);

  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean | undefined>();
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const validateToggle = (event: ToggleCustomEvent<{ checked: boolean }>) => {
    setIsTouched(true);
    setIsChecked(event.detail.checked);
    setIsValid(event.detail.checked);
  };

  return (
    <>
      <IonToggle
        ref={wifiRef}
        className={`${isValid ? 'ion-valid' : ''} ${isValid === false ? 'ion-invalid' : ''} ${
          isTouched ? 'ion-touched' : ''
        }`}
        helperText="Enable to connect to available networks"
        errorText="Must be enabled to access the internet"
        justify="space-between"
        checked={isChecked}
        onIonChange={(event) => validateToggle(event)}
      >
        Wi-Fi
      </IonToggle>
    </>
  );
}

export default Example;
```
