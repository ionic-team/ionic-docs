```tsx
import React from 'react';
import { IonButton, IonHeader, IonContent, IonPage, IonToolbar, IonTitle } from '@ionic/react';

function PageOne() {
  return (
    <IonPage>
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
    </IonPage>
  );
}

export default PageOne;
```
