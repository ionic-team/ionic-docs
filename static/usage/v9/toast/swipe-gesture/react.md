```tsx
import React from 'react';
import { IonButton, IonContent, IonFooter, IonTitle, IonToast, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonContent className="ion-padding">
        <IonButton id="open-toast">Open Toast</IonButton>
        <IonToast
          message="This toast can be swiped to dismiss"
          trigger="open-toast"
          swipeGesture="vertical"
          position="bottom"
          positionAnchor="footer"
        ></IonToast>
      </IonContent>
      <IonFooter id="footer">
        <IonToolbar>
          <IonTitle>Footer</IonTitle>
        </IonToolbar>
      </IonFooter>
    </>
  );
}
export default Example;
```
