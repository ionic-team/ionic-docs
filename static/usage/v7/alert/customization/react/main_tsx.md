```tsx
import React from 'react';
import { IonAlert, IonButton } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonButton id="present-alert">Click Me</IonButton>
      <IonAlert
        trigger="present-alert"
        header="Are you sure?"
        className="custom-alert"
        buttons={[
          {
            text: 'No',
            cssClass: 'alert-button-cancel',
          },
          {
            text: 'Yes',
            cssClass: 'alert-button-confirm',
          },
        ]}
      ></IonAlert>
    </>
  );
}
export default Example;
```
