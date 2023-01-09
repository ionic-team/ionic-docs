```tsx
import React, { useState } from 'react';
import { IonActionSheet, IonButton } from '@ionic/react';
import type { OverlayEventDetail } from '@ionic/core';

import './main.css';

function Example() {
  const [result, setResult] = useState<OverlayEventDetail>();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <IonButton onClick={() => setIsOpen(true)}>Open</IonButton>
      <IonActionSheet
        isOpen={isOpen}
        header="Example header"
        subHeader="Example subheader"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete'
            }
          },
          {
            text: 'Share',
            data: {
              action: 'share'
            }
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel'
            }
          }
        ]}
        onDidDismiss={() => setIsOpen(false)}
      ></IonActionSheet>

      {result && <code>{JSON.stringify(result, null, 2)}</code>}
    </div>
  );
}
export default Example;
```
