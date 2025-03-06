```tsx
import React, { useRef, useState } from 'react';
import { IonCheckbox, IonButton, CheckboxCustomEvent } from '@ionic/react';

function Example() {
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean | undefined>();

  const checkboxRef = useRef<HTMLIonCheckboxElement>(null);

  const validateCheckbox = (event: CheckboxCustomEvent<{ checked: boolean }>) => {
    setIsTouched(true);
    setIsValid(event.detail.checked);
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (checkboxRef.current) {
      validateCheckbox({ detail: { checked: checkboxRef.current.checked } } as CheckboxCustomEvent<{
        checked: boolean;
      }>);
    }
  };

  return (
    <>
      <form onSubmit={submit}>
        <IonCheckbox
          ref={checkboxRef}
          className={`${isValid ? 'ion-valid' : ''} ${isValid === false ? 'ion-invalid' : ''} ${
            isTouched ? 'ion-touched' : ''
          }`}
          helperText="This needs to be checked"
          errorText="This field is required"
          onIonChange={(event) => validateCheckbox(event)}
        >
          I agree to the terms and conditions
        </IonCheckbox>

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
