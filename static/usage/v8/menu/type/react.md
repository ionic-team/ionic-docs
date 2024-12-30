```tsx
import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import type { RadioGroupCustomEvent } from '@ionic/react';

function Example() {
  const [menuType, setMenuType] = useState('overlay');

  return (
    <>
      <IonMenu type={menuType} contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonMenuToggle>
            <IonButton>Click to close the menu</IonButton>
          </IonMenuToggle>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <h2>Select an overlay type:</h2>
          <IonRadioGroup
            value={menuType}
            onIonChange={(event: RadioGroupCustomEvent) => {
              setMenuType(event.detail.value);
            }}
          >
            <IonItem>
              <IonRadio value="overlay">
                <code>overlay</code>
              </IonRadio>
            </IonItem>
            <IonItem>
              <IonRadio value="reveal">
                <code>reveal</code>
              </IonRadio>
            </IonItem>
            <IonItem>
              <IonRadio value="push">
                <code>push</code>
              </IonRadio>
            </IonItem>
          </IonRadioGroup> <br />
          <IonMenuToggle>
            <IonButton>Click to open the menu</IonButton>
          </IonMenuToggle>
        </IonContent>
      </IonPage>
    </>
  );
}
export default Example;
```
