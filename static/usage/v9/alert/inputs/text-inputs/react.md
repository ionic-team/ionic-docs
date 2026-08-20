```tsx
import React from 'react';
import { IonAlert, IonButton } from '@ionic/react';

function Example() {
  return (
    <>
      <IonButton id="present-alert">Click Me</IonButton>
      <IonAlert
        trigger="present-alert"
        header="Please enter your info"
        buttons={['OK']}
        inputs={[
          {
            placeholder: 'Name',
          },
          {
            placeholder: 'Nickname (max 8 characters)',
            attributes: {
              maxlength: 8,
            },
          },
          {
            type: 'number',
            placeholder: 'Age',
            min: 1,
            max: 100,
          },
          {
            type: 'textarea',
            placeholder: 'A little about yourself',
          },
        ]}
      ></IonAlert>
    </>
  );
}
export default Example;
```
