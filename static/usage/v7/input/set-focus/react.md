```tsx
import React, { useRef } from 'react';
import { IonInput, IonItem, IonList, IonButton } from '@ionic/react';

const Home = () => {
  const input = useRef<HTMLIonInputElement>(null);

  return (
    <IonList>
      <IonItem>
        <IonButton onClick={() => input.current?.setFocus()}>Click to set focus</IonButton>
      </IonItem>
      <IonItem>
        <IonInput ref={input} label="Email" labelPlacement="floating"></IonInput>
      </IonItem>
    </IonList>
  );
};

export default Home;
```
