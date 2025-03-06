```tsx
import React, { useRef, useState } from 'react';
import { IonSelect, IonSelectOption, IonButton, SelectCustomEvent } from '@ionic/react';

function Example() {
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean | undefined>();

  const favFruitRef = useRef<HTMLIonSelectElement>(null);

  const validateSelect = (event: SelectCustomEvent<{ value: string }>) => {
    setIsTouched(true);
    setIsValid(event.detail.value);
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (favFruitRef.current) {
      validateSelect({ detail: { value: favFruitRef.current.value } } as SelectCustomEvent<{
        value: string;
      }>);
    }
  };

  return (
    <>
      <form onSubmit={submit}>
        <IonSelect
          ref={favFruitRef}
          label="Default label"
          placeholder="Favorite Fruit"
          className={`${isValid ? 'ion-valid' : ''} ${isValid === false ? 'ion-invalid' : ''} ${
            isTouched ? 'ion-touched' : ''
          }`}
          helperText="Select your favorite fruit"
          errorText="This field is required"
          onIonChange={(event) => validateSelect(event)}
        >
          <IonSelectOption value="apple">Apple</IonSelectOption>
          <IonSelectOption value="banana">Banana</IonSelectOption>
          <IonSelectOption value="orange">Orange</IonSelectOption>
        </IonSelect>

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
