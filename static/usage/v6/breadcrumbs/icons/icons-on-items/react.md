```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs, IonIcon, IonLabel } from '@ionic/react';
import { camera, film, flash, home } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonLabel>Icons at Start</IonLabel>
      <IonBreadcrumbs>
        <IonBreadcrumb href="#home">
          <IonIcon slot="start" icon={home}></IonIcon>
          Home
        </IonBreadcrumb>
        <IonBreadcrumb href="#electronics">
          <IonIcon slot="start" icon={flash}></IonIcon>
          Electronics
        </IonBreadcrumb>
        <IonBreadcrumb href="#cameras">
          <IonIcon slot="start" icon={camera}></IonIcon>
          Cameras
        </IonBreadcrumb>
        <IonBreadcrumb href="#film">
          <IonIcon slot="start" icon={film}></IonIcon>
          Film
        </IonBreadcrumb>
      </IonBreadcrumbs>

      <IonLabel class="ion-margin-top">Icons at End</IonLabel>
      <IonBreadcrumbs>
        <IonBreadcrumb href="#home">
          Home
          <IonIcon slot="end" icon={home}></IonIcon>
        </IonBreadcrumb>
        <IonBreadcrumb href="#electronics">
          Electronics
          <IonIcon slot="end" icon={flash}></IonIcon>
        </IonBreadcrumb>
        <IonBreadcrumb href="#cameras">
          Cameras
          <IonIcon slot="end" icon={camera}></IonIcon>
        </IonBreadcrumb>
        <IonBreadcrumb href="#film">
          Film
          <IonIcon slot="end" icon={film}></IonIcon>
        </IonBreadcrumb>
      </IonBreadcrumbs>
    </>
  );
}
export default Example;
```
