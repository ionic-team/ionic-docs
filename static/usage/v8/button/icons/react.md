```tsx
import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { heart, logoApple, settingsSharp, star } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonButton size="small">
        <IonIcon slot="icon-only" ios={logoApple} md={settingsSharp}></IonIcon>
      </IonButton>

      <IonButton>
        <IonIcon slot="icon-only" ios={logoApple} md={settingsSharp}></IonIcon>
      </IonButton>

      <IonButton size="large">
        <IonIcon slot="icon-only" ios={logoApple} md={settingsSharp}></IonIcon>
      </IonButton>

      <IonButton size="small">
        <IonIcon slot="start" icon={star}></IonIcon>
        Left Icon
      </IonButton>

      <IonButton>
        <IonIcon slot="start" icon={star}></IonIcon>
        Left Icon
      </IonButton>

      <IonButton size="large">
        <IonIcon slot="start" icon={star}></IonIcon>
        Left Icon
      </IonButton>

      <IonButton size="small">
        Right Icon
        <IonIcon slot="end" icon={heart}></IonIcon>
      </IonButton>

      <IonButton>
        Right Icon
        <IonIcon slot="end" icon={heart}></IonIcon>
      </IonButton>

      <IonButton size="large">
        Right Icon
        <IonIcon slot="end" icon={heart}></IonIcon>
      </IonButton>
    </>
  );
}
export default Example;
```
