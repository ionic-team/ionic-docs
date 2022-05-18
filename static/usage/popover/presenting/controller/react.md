```tsx
import React, { useState } from 'react';
import { IonButton, IonContent, useIonPopover } from '@ionic/react';

const Popover = () => <IonContent className="ion-padding">Hello World!</IonContent>;

function Example() {
  const [present, dismiss] = useIonPopover(Popover, {
    onDismiss: (data, role) => dismiss(data, role)
  });
  const [roleMsg, setRoleMsg] = useState('');

  return (
    <div>
      <IonButton onClick={(e: any) => present({
        event: e,
        onDidDismiss: (e: any) => setRoleMsg(`Popover dismissed with role: ${e.detail.role}`)
      })}>Click Me</IonButton>
      <p>{roleMsg}</p>
    </div>
  );
}
export default Example;
```
