```tsx
import React, { useState } from 'react';
import { 
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonTitle,
  IonToolbar
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
            onIonChange={(ev: RadioGroupCustomEvent) => {
              setMenuType(ev.detail.value);
            }}
          >
            <IonItem>
              <IonLabel>
                <code>overlay</code>
              </IonLabel>
              <IonRadio value="overlay"></IonRadio>
            </IonItem>
            <IonItem>
              <IonLabel>
                <code>reveal</code>
              </IonLabel>
              <IonRadio value="reveal"></IonRadio>
            </IonItem>
            <IonItem>
              <IonLabel>
                <code>push</code>
              </IonLabel>
              <IonRadio value="push"></IonRadio>
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
