```tsx
import React from 'react';
import { IonButton, IonContent } from '@ionic/react';

import PageThree from './page-three';

function PageTwo({ nav }: { nav: HTMLIonNavElement }) {
  const navigateToPageThree = () => nav.push(PageThree, { nav });

  return (
    <IonContent class="ion-padding">
      <h1>Page Two</h1>
      <IonButton onClick={navigateToPageThree}>Go to Page Three</IonButton>
    </IonContent>
  );
}

export default PageTwo;
```
