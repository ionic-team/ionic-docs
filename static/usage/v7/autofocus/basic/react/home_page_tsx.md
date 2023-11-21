```tsx
import React, { useRef } from 'react';
import { IonInput, IonItem, IonList, IonPage, useIonViewWillEnter } from '@ionic/react';

const HomePage = () => {
  const input = useRef<HTMLIonInputElement>(null);

  useIonViewWillEnter(() => {
    console.log('useIonViewWillEnter');
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
