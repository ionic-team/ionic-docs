```tsx
import React from 'react';
import { IonButton, IonContent, IonFooter, IonHeader, IonTitle, IonToast, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonHeader id="header">
        <IonToolbar>
          <IonTitle>Header</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonButton id="headerAnchor">Anchor to Header</IonButton>
        <IonButton id="footerAnchor">Anchor to Footer</IonButton>

        <IonToast
          trigger="headerAnchor"
          position="top"
          positionAnchor="header"
          message="Hello World!"
          duration={2000}
        ></IonToast>
        <IonToast
          trigger="footerAnchor"
          position="bottom"
          positionAnchor="footer"
          message="Hello World!"
          duration={2000}
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
