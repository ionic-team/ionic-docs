```tsx
import React from 'react';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useParams } from 'react-router-dom';

const ItemDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/dashboard" />
          </IonButtons>
          <IonTitle>Item {id}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">You navigated to item {id}.</IonContent>
    </IonPage>
  );
};

export default ItemDetailPage;
```
