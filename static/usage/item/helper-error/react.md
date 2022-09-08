```tsx
import React, { useState } from 'react';
import { IonInput, IonItem, IonLabel, IonNote } from '@ionic/react';

function Example() {
  const [isValid, setIsValid] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const validateEmail = (email: string) => {
    return email.match(/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
  }

  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;

    setIsValid(false);
    setIsInvalid(false);

    if (value === '') return;

    validateEmail(value) !== null ? setIsValid(true) : setIsInvalid(true);
  }

  return (
    <>
      <IonItem fill="solid" className={`${isValid && "ion-valid"} ${isInvalid && "ion-invalid"}`}>
        <IonLabel position="floating">Email</IonLabel>
        <IonInput type="email" onIonInput={(event) => validate(event)}></IonInput>
        <IonNote slot="helper">Enter a valid email</IonNote>
        <IonNote slot="error">Invalid email</IonNote>
      </IonItem>
    </>
  );
}
export default Example;
```
