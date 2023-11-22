```tsx
import React, { useRef } from 'react';
import { IonInput, IonItem, IonList, IonButton, IonPage } from '@ionic/react';

const Home = () => {
  const input = useRef<HTMLIonInputElement>(null);

  return (
    <IonPage>
      <IonList>
        <IonItem>
          <IonButton onClick={() => input.current?.setFocus()}>Click to set focus</IonButton>
        </IonItem>
        <IonItem>
          <IonInput ref={input} label="Email" labelPlacement="floating"></IonInput>
        </IonItem>
      </IonList>
    </IonPage>
  );
};

export default Home;
```
