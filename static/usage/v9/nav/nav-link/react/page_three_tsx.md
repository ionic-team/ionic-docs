```tsx
import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/react';

function PageThree() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Page Three</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>Page Three</h1>
      </IonContent>
    </>
  );
}

export default PageThree;
```
