```tsx
import React from 'react';
import { IonButton, IonPicker } from '@ionic/react';

function Example() {
  return (
    <>
      <IonButton id="open-picker">Open</IonButton>
      <IonPicker
        trigger="open-picker"
        columns={[
          {
            name: 'languages',
            options: [
              {
                text: 'JavaScript',
                value: 'javascript',
              },
              {
                text: 'TypeScript',
                value: 'typescript',
              },
              {
                text: 'Rust',
                value: 'rust',
              },
              {
                text: 'C#',
                value: 'c#',
              },
            ],
          },
        ]}
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Confirm',
            handler: (value) => {
              console.log(`You selected: ${value.languages.value}`);
            },
          },
        ]}
      ></IonPicker>
    </>
  );
}

export default Example;
```
