```tsx
import React from 'react';
import { IonAlert, IonButton } from '@ionic/react';

function Example() {
  return (
    <>
      <IonButton id="present-alert">Click Me</IonButton>
      <IonAlert
        trigger="present-alert"
        header="Select your favorite color"
        buttons={['OK']}
        inputs={[
          {
            label: 'Red',
            type: 'radio',
            value: 'red',
          },
          {
            label: 'Blue',
            type: 'radio',
            value: 'blue',
          },
          {
            label: 'Green',
            type: 'radio',
            value: 'green',
          },
        ]}
      ></IonAlert>
    </>
  );
}
export default Example;
```
