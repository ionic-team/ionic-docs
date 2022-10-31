```tsx
import React from 'react';
import { IonButton, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/react';

function PageOne() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Back Button</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Page One</h1>
        <p>Navigate to the next page to see the back button.</p>
        <IonButton routerLink="/two">Navigate</IonButton>
      </IonContent>
    </>
  );
}

export default PageOne;
```
