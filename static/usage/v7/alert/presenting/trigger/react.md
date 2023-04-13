```tsx
import React from 'react';
import { IonAlert, IonButton } from '@ionic/react';

function Example() {
  return (
    <>
      <IonButton id="present-alert">Click Me</IonButton>
      <IonAlert
        trigger="present-alert"
        header="Alert"
        subHeader="Important message"
        message="This is an alert!"
        buttons={['OK']}
      ></IonAlert>
    </>
  );
}
export default Example;
```
