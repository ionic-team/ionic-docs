```tsx
import React from 'react';
import { IonChip, IonAvatar, IonLabel, IonIcon } from '@ionic/react';
import { close, closeCircle, pin } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonChip>
        <IonAvatar>
          <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </IonAvatar>
        <IonLabel>Avatar Chip</IonLabel>
        <IonIcon icon={closeCircle}></IonIcon>
      </IonChip>

      <IonChip>
        <IonIcon icon={pin} color="primary"></IonIcon>
        <IonLabel>Icon Chip</IonLabel>
        <IonIcon icon={close}></IonIcon>
      </IonChip>
    </>
  );
}
export default Example;
```
