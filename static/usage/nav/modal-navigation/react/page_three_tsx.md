```tsx
import React from 'react';
import { IonButton, IonContent } from '@ionic/react';

function PageThree({ nav }: { nav: HTMLIonNavElement }) {
  const navigateBack = () => nav.pop();
  const navigateToRoot = () => nav.popToRoot();

  return (
    <IonContent class="ion-padding">
      <h1>Page Three</h1>
      <IonButton onClick={navigateBack}>Go Back</IonButton>
      <IonButton onClick={navigateToRoot}>Go to Root</IonButton>
    </IonContent>
  );
}

export default PageThree;
```
