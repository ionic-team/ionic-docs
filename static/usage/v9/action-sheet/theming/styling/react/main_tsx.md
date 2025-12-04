```tsx
import React from 'react';
import { IonActionSheet, IonButton } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonButton id="open-action-sheet">Open</IonButton>
      <IonActionSheet
        trigger="open-action-sheet"
        className="my-custom-class"
        header="Example header"
        subHeader="Example subheader"
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
      ></IonActionSheet>
    </>
  );
}
export default Example;
```
