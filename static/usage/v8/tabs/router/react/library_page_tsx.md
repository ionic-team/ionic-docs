```tsx
import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

const LibraryPage = () => (
  <>
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
  </>
);

export default LibraryPage;
```
