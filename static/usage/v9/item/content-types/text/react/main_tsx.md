```tsx
import React from 'react';
import {
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonTextarea,
  IonToggle,
  IonToolbar,
  IonTitle,
} from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light">
        <IonList inset={true}>
          <IonItem>
            <IonInput label="First Name"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput label="Last Name"></IonInput>
          </IonItem>
          <IonItem>
            <IonToggle>
              <IonLabel>Allow Notifications</IonLabel>
              <IonNote color="medium">Unsubscribe at any time</IonNote>
            </IonToggle>
          </IonItem>
        </IonList>

        <IonList inset={true}>
          <IonItem>
            <IonTextarea label="Comments" label-placement="floating" rows={5}></IonTextarea>
          </IonItem>
        </IonList>

        <IonNote color="medium" class="ion-margin-horizontal">
          Your comments will be kept anonymous and will only be used to improve the reliability of our products.
        </IonNote>
      </IonContent>
    </>
  );
}
export default Example;
```
