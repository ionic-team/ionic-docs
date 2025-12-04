```tsx
import React, { useRef, useState } from 'react';
import { IonCheckbox, IonButton, CheckboxCustomEvent } from '@ionic/react';

function Example() {
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean | undefined>();

  const agreeRef = useRef<HTMLIonCheckboxElement>(null);

  const validateCheckbox = (event: CheckboxCustomEvent<{ checked: boolean }>) => {
    setIsTouched(true);
    setIsValid(event.detail.checked);
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (agreeRef.current) {
      validateCheckbox({ detail: { checked: agreeRef.current.checked } } as CheckboxCustomEvent<{
        checked: boolean;
      }>);
    }
  };

  return (
    <>
      <form onSubmit={submit}>
        <IonCheckbox
          ref={agreeRef}
          className={`${isValid ? 'ion-valid' : ''} ${isValid === false ? 'ion-invalid' : ''} ${
            isTouched ? 'ion-touched' : ''
          }`}
          helperText="Agree to the terms before continuing"
          errorText="You must agree to the terms to continue"
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
