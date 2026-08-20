```tsx
import React from 'react';
import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonLabel } from '@ionic/react';

function Example() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="open-modal" expand="block">
          Open Sheet Modal
        </IonButton>
        <IonModal
          trigger="open-modal"
          initialBreakpoint={0.25}
          breakpoints={[0, 0.25, 0.5, 0.75]}
          handleBehavior="cycle"
        >
          <IonContent className="ion-padding">
            <div className="ion-margin-top">
              <IonLabel>Click the handle above to advance to the next breakpoint.</IonLabel>
            </div>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```
