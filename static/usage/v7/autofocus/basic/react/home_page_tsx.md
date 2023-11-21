```tsx
import React, { useRef } from 'react';
import { IonInput, IonItem, IonList, IonPage, useIonViewDidEnter } from '@ionic/react';

const HomePage = () => {
  const input = useRef<HTMLIonInputElement>(null);

  useIonViewDidEnter(() => {
    input.current?.setFocus();
  });

  return (
    <IonPage>
      <IonList>
        <IonItem>
          <IonInput autofocus placeholder="with `autofocus`"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput ref={input} placeholder="using `.setFocus()`"></IonInput>
        </IonItem>
      </IonList>
    </IonPage>
  );
};

export default HomePage;
```
