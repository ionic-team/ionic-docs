```tsx
import React, { useRef } from 'react';
import { IonButtons, IonButton, IonDatetime } from '@ionic/react';
function Example() {
  const datetime = useRef<null | HTMLIonDatetimeElement>(null);
  const reset = () => {
    datetime.current?.reset();
  }
  const cancel = () => {
    datetime.current?.cancel();
  }
  const confirm = () => {
    datetime.current?.confirm();
  }
  return (
    <IonDatetime ref={datetime}>
      <IonButtons slot="buttons">
        <IonButton color="danger" onClick={reset}>Reset</IonButton>
        <IonButton color="primary" onClick={cancel}>Never mind</IonButton>
        <IonButton color="primary" onClick={confirm}>All Set</IonButton>
      </IonButtons>
    </IonDatetime>
  );
}
export default Example;
```
