```tsx
import React from 'react';
import { IonContent, IonFooter, IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonContent class="ion-padding">
        <h1>Content</h1>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>Footer</IonTitle>
        </IonToolbar>
      </IonFooter>
    </>
  );
}
export default Example;
```
