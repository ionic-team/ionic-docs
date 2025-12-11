```tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const LibraryPage = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Library</IonTitle>
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
        Library content
      </div>
    </IonContent>
  </IonPage>
);

export default LibraryPage;
```
