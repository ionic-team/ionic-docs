```tsx
import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonContent, IonPage, IonToolbar, IonTitle } from '@ionic/react';

function PageTwo() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/one"></IonBackButton>
          </IonButtons>
          <IonTitle>Back Button</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Page Two</h1>
        <p>Use the back button to navigate to the previous page.</p>
      </IonContent>
    </IonPage>
  );
}

export default PageTwo;
```
