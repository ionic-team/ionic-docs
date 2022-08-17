```tsx
import React, { useState } from 'react';
import { IonButton, IonContent, useIonPopover } from '@ionic/react';

const Popover = () => <IonContent className="ion-padding">Hello World!</IonContent>;

function Example() {
  const [present, dismiss] = useIonPopover(Popover, {
    onDismiss: (data: any, role: string) => dismiss(data, role),
  });
  const [roleMsg, setRoleMsg] = useState('');

  return (
    <>
      <IonButton
        onClick={(e: any) =>
          present({
            event: e,
            onDidDismiss: (e: CustomEvent) => setRoleMsg(`Popover dismissed with role: ${e.detail.role}`),
          })
        }
      >
        Click Me
      </IonButton>
      <p>{roleMsg}</p>
    </>
  );
}
export default Example;
```
