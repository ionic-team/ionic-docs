```tsx
import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonContent, IonToolbar, IonTitle, IonPage } from '@ionic/react';

function PageThree() {
  return (
    <IonPage>
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
    </IonPage>
  );
}

export default PageThree;
```
