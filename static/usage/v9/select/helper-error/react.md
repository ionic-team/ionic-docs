```tsx
import React, { useRef, useState } from 'react';
import { IonSelect, IonSelectOption, IonButton, SelectCustomEvent } from '@ionic/react';

function Example() {
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean | undefined>();

  const favFruitRef = useRef<HTMLIonSelectElement>(null);

  const validateSelect = (event: SelectCustomEvent<{ value: string }>) => {
    setIsValid(event.detail.value ? true : false);
  };

  const markTouched = () => {
    setIsTouched(true);
  };

  const onIonBlur = () => {
    markTouched();

    if (favFruitRef.current) {
      validateSelect({ detail: { value: favFruitRef.current.value } } as SelectCustomEvent<{
        value: string;
      }>);
    }
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    markTouched();

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
          label="Favorite fruit"
          placeholder="Select fruit"
          className={`${isValid ? 'ion-valid' : ''} ${isValid === false ? 'ion-invalid' : ''} ${
            isTouched ? 'ion-touched' : ''
          }`}
          helperText="Select your favorite fruit"
          errorText="This field is required"
          onIonChange={(event) => validateSelect(event)}
          onIonBlur={onIonBlur}
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
