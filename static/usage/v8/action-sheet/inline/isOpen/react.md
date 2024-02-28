```tsx
import React, { useState } from 'react';
import { IonActionSheet, IonButton } from '@ionic/react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IonButton onClick={() => setIsOpen(true)}>Open</IonButton>
      <IonActionSheet
        isOpen={isOpen}
        header="Actions"
        buttons={[
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
        ]}
        onDidDismiss={() => setIsOpen(false)}
      ></IonActionSheet>
    </>
  );
}
export default Example;
```
