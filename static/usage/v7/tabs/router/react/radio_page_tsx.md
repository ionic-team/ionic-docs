```tsx
import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

const RadioPage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Radio</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        Radio content
      </div>
    </IonContent>
  </>
);

export default RadioPage;
```
