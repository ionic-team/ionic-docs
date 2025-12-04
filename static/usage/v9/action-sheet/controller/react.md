```tsx
import React from 'react';
import { IonButton, useIonActionSheet } from '@ionic/react';

function Example() {
  const [present] = useIonActionSheet();

  return (
    <IonButton
      onClick={() =>
        present({
          header: 'Actions',
          buttons: [
            {
              text: 'Delete',
              role: 'destructive',
              data: {
                action: 'delete',
              },
            },
            {
              text: 'Share',
              data: {
                action: 'share',
              },
            },
            {
              text: 'Cancel',
              role: 'cancel',
              data: {
                action: 'cancel',
              },
            },
          ],
        })
      }
    >
      Open
    </IonButton>
  );
}
export default Example;
```
