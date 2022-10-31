```tsx
import React from 'react';
import { IonBackButton, IonButtons, IonButton, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/react';
import { caretBack } from 'ionicons/icons';

function PageTwo() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Previous" icon={caretBack}></IonBackButton>
          </IonButtons>
          <IonTitle>Back Button</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Page Two</h1>
        <p>Use the back button to navigate to the previous page.</p>
      </IonContent>
    </>
  );
}

export default PageTwo;
```
