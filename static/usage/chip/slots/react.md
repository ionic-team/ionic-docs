```tsx
import React from 'react';
import { IonChip, IonAvatar, IonLabel, IonIcon } from '@ionic/react';
import { close, closeCircle, pin } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonChip>
        <IonAvatar>
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
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
