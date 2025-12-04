```tsx
import React from 'react';
import { IonAvatar, IonItem, IonLabel, IonList, IonIcon } from '@ionic/react';
import { airplane, bluetooth, call, wifi } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonList>
        <IonItem>
          <IonIcon aria-hidden="true" icon={airplane} slot="start"></IonIcon>
          <IonLabel>Airplane Mode</IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon aria-hidden="true" icon={wifi} slot="start"></IonIcon>
          <IonLabel>Wi-Fi</IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon aria-hidden="true" icon={bluetooth} slot="start"></IonIcon>
          <IonLabel>Bluetooth</IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon aria-hidden="true" icon={call} slot="start"></IonIcon>
          <IonLabel>Cellular</IonLabel>
        </IonItem>
      </IonList>

      <IonList>
        <IonItem>
          <IonAvatar aria-hidden="true" slot="start">
            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
          <IonLabel>Huey</IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar aria-hidden="true" slot="start">
            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
          <IonLabel>Dewey</IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar aria-hidden="true" slot="start">
            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
          <IonLabel>Louie</IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar aria-hidden="true" slot="start">
            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
          <IonLabel>Fooie</IonLabel>
        </IonItem>
      </IonList>
    </>
  );
}
export default Example;
```
