```tsx
import React from 'react';
import { IonButton, IonContent } from '@ionic/react';

import PageTwo from './page-two';

function PageOne({ nav }: { nav: HTMLIonNavElement }) {
  const navigateToPageTwo = () => nav.push(PageTwo, { nav });
  return (
    <IonContent class="ion-padding">
      <h1>Page One</h1>
      <IonButton onClick={navigateToPageTwo}>Go to Page Two</IonButton>
    </IonContent>
  );
}

export default PageOne;
```
