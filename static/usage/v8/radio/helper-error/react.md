```tsx
import React, { useRef, useState } from 'react';
import { IonRadioGroup, IonRadio, IonButton, RadioGroupCustomEvent } from '@ionic/react';

function Example() {
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean | undefined>();

  const favFruitRef = useRef<HTMLIonRadioGroupElement>(null);

  const validateRadioGroup = (event: RadioGroupCustomEvent<{ value: string }>) => {
    setIsTouched(true);
    setIsValid(event.detail.value ? true : false);
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (favFruitRef.current) {
      validateRadioGroup({ detail: { value: favFruitRef.current.value } } as RadioGroupCustomEvent<{
        value: string;
      }>);
    }
  };

  return (
    <>
      <form onSubmit={submit}>
        <IonRadioGroup
          ref={favFruitRef}
          className={`${isValid ? 'ion-valid' : ''} ${isValid === false ? 'ion-invalid' : ''} ${
            isTouched ? 'ion-touched' : ''
          }`}
          helperText="Select your favorite fruit"
          errorText="This field is required"
          onIonChange={(event) => validateRadioGroup(event)}
        >
          <IonRadio value="grapes">Grapes</IonRadio>
          <br />
          <IonRadio value="strawberries">Strawberries</IonRadio>
          <br />
          <IonRadio value="pineapple">Pineapple</IonRadio>
          <br />
          <IonRadio value="cherries">Cherries</IonRadio>
        </IonRadioGroup>

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
