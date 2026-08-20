```tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const SettingsPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Settings</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">Settings content</IonContent>
  </IonPage>
);

export default SettingsPage;
```
