```tsx
import React, { useRef, useState } from 'react';
import { IonToggle, IonButton, ToggleCustomEvent } from '@ionic/react';

function Example() {
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean | undefined>();

  const wifiRef = useRef<HTMLIonToggleElement>(null);

  const validateToggle = (event: ToggleCustomEvent<{ checked: boolean }>) => {
    setIsTouched(true);
    setIsValid(event.detail.checked);
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (wifiRef.current) {
      validateToggle({ detail: { checked: wifiRef.current.checked } } as ToggleCustomEvent<{
        checked: boolean;
      }>);
    }
  };

  return (
    <>
      <form onSubmit={submit}>
        <IonToggle
          ref={wifiRef}
          className={`${isValid ? 'ion-valid' : ''} ${isValid === false ? 'ion-invalid' : ''} ${
            isTouched ? 'ion-touched' : ''
          }`}
          helperText="This needs to be enabled"
          errorText="This field is required"
          onIonChange={(event) => validateToggle(event)}
        >
          I agree to the terms and conditions
        </IonToggle>

        <br />

        <IonButton type="submit" size="small">
          Submit
        </IonButton>
      </form>
    </>
  );
}

export default Example;
```
