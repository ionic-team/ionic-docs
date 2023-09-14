```tsx
import React from 'react';
import { IonItem, IonLabel, IonList, IonIcon } from '@ionic/react';
import { airplane, bluetooth, call, wifi } from 'ionicons/icons';

function Example() {
  return (
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
  );
}
export default Example;
```

