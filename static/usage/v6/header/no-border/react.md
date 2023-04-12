```tsx
import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Header</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Content</h1>
      </IonContent>
    </>
  );
}
export default Example;
```
