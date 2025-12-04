```tsx
import React from 'react';
import { IonButton, IonHeader, IonContent, IonNavLink, IonToolbar, IonTitle } from '@ionic/react';

import PageTwo from './page-two';

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
        <IonNavLink routerDirection="forward" component={() => <PageTwo />}>
          <IonButton>Navigate</IonButton>
        </IonNavLink>
      </IonContent>
    </>
  );
}

export default PageOne;
```
