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
          message="Click the 'Close' button to dismiss"
          buttons={[
            {
              text: 'Close',
              handler: () => setIsOpen(false)
            }
          ]}
        ></IonToast>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```
