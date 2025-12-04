```tsx
import React, { useState } from 'react';
import { IonButton, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonToast } from '@ionic/react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inline Toast</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="block" onClick={() => setIsOpen(true)}>
          Open
        </IonButton>
        <IonToast
          isOpen={isOpen}
          message="This toast will close in 5 seconds"
          onDidDismiss={() => setIsOpen(false)}
          duration={5000}
        ></IonToast>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```
