```tsx
import React from 'react';
import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonHeader,
  IonContent,
  IonNavLink,
  IonToolbar,
  IonTitle,
  IonPage,
} from '@ionic/react';

import PageThree from './page-three';

function PageTwo() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Page Two</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>Page Two</h1>
        <IonNavLink routerDirection="forward" component={() => <PageThree />}>
          <IonButton>Go to Page Three</IonButton>
        </IonNavLink>
      </IonContent>
    </IonPage>
  );
}

export default PageTwo;
```
