```tsx
import React, { useRef } from 'react';
import { IonInput, IonItem, IonList, IonPage, useIonViewDidEnter } from '@ionic/react';

const Home = () => {
  const input = useRef<HTMLIonInputElement>(null);

  useIonViewDidEnter(() => {
    input.current?.setFocus();
  });

  return (
    <IonPage>
      <IonList>
        <IonItem>
          <IonInput autofocus={true} label="Autofocus" labelPlacement="floating"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput ref={input} label="setFocus" labelPlacement="floating"></IonInput>
        </IonItem>
      </IonList>
    </IonPage>
  );
};

export default Home;
```
